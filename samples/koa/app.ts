import path from 'path';

import views from 'koa-views';
import logger from 'koa-logger';
import serve from "koa-static";
import Koa from 'koa';
import { Client } from "@umbraco/headless-client";

const app = new Koa();
const client = new Client({
  projectAlias: process.env.UMBRACO__PROJECTALIAS || require('./package.json').umbraco.projectAlias
})

const apiKey = process.env.UMBRACE__APIKEY || require('./package.json').umbraco.apiKey;
if (apiKey) {
  client.setAPIKey(apiKey);
}

const getByUrl = async (cache: Object, path: string) => {
  const content = cache[path];
  if (content)
    return content;
   
  return cache[path] = await client.delivery.content.byUrl(path);
}

const getNavigationItems = async (ctx: Koa.ParameterizedContext, cache: Object) => {
  const root = await getByUrl(cache, '/');
  const children = await client.delivery.content.children(root._id);

  return (children.items as any)
    .filter(item => !item.umbNaviHide)
    .map(item => {
      return {
        title: item.name,
        url: item._url,
        isCurrent: item._url === ctx.path
      }
    });
}

const getFooter = async (ctx: Koa.ParameterizedContext, cache: Object) => {
  const root = await getByUrl(cache, '/');

  return {
    title: root.footerTitle,
    links: root.footerLinks
  };
}

// middleware
app.use(logger());
app.use(serve(path.join(__dirname, 'public')));

app.use(views(path.join(__dirname, 'views'), {
  extension: 'njk',
  map: { njk: 'nunjucks' },
  options: { settings: { views: path.join(__dirname, 'views') } }
}));

// route definitions
app.use(async (ctx: Koa.ParameterizedContext) => {
  try {
    const cache = {};
    const content = await getByUrl(cache, ctx.path);
    const navigationItems = await getNavigationItems(ctx, cache);
    const footer = await getFooter(ctx, cache);

    await ctx.render(content.contentTypeAlias, { content, mainNavigation: navigationItems, footer });
  } catch (err) {
    if (err.jsonData && err.jsonData.error.code === 'NotFound') {
      ctx.status = 404;
      return;
    }
    throw err;
  }
});

// listen
const port = process.env.port || 3000;
app.listen(port, () => console.log(`App listening on http://localhost:${port}`));
