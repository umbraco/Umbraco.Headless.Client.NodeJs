# Umbraco Headless Node.js Koa sample

Node.js Koa sample site for Umbraco Headless.

## Features

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Koa](https://koajs.com/)
  - [koa-logger](https://github.com/koajs/logger)
  - [koa-static](https://github.com/koajs/static)
  - [koa-views](https://github.com/queckezz/koa-views)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Start the application

Before running the application,  `package.json` needs to be updated with your Umbrace Headless
 project alias (the project alias can be found in the [Umbraco Cloud Portal](https://www.s1.umbraco.io)). If the Content Delivery API is protected the `apiKey` also needs to be updated.

```json
{
  "umbraco": {
    "projectAlias": "",
    "apiKey": ""
  }
}
```

Run the following to restore packages and run the site.

```bash
> npm install
> npm start
```

you should now be able to browse the site by visiting `http://localhost:3000`
