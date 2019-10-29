import express from 'express'
import {BlogController, HomeController, ProductController} from "./Controllers";
import {join} from 'path'
import { getUmbracoClient } from './getUmbracoClient';

const PORT = process.env["PORT"] || 8080

const app = express()

app.use(express.static(join(__dirname, 'public')))

app.set("view engine", "ejs")
app.set("views", join(__dirname, '..', 'Views'))


app.get('/', (req, res) => res.redirect('/home'))
app.get('/home', HomeController.index)

app.get('/home/blog', BlogController.index)
app.get('/home/blog/:sku', BlogController.show)


app.get('/home/products', ProductController.index)

app.get(/\/home\/products\/([A-Za-z0-9_-]+\/?)$/, ProductController.show)
//app.get('/home/products/:sku', ProductController.show)


app.get("/test", async (req, res) => {


    const client = getUmbracoClient()
    const content = await client.manager.content.root()
    
    debugger


    res.json({
        content: content
    })

})


app.use((err, req, res, next) => {
    console.log("Got an error")
    console.error(err)
    res.status(500).send()
})


app.listen(PORT, () => {
    console.log(`Listen on http://localhost:${PORT}`)
})
