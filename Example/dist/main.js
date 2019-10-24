"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Controllers_1 = require("./Controllers");
var path_1 = require("path");
var PORT = process.env["PORT"] || 8080;
var app = express_1.default();
app.use(express_1.default.static(path_1.join(process.cwd(), 'public')));
app.set("view engine", "ejs");
app.set("views", path_1.join(process.cwd(), 'Views'));
app.get('/', function (req, res) { return res.redirect('/home'); });
app.get('/home', Controllers_1.HomeController.index);
app.get('/home/test', Controllers_1.HomeController.createRandomBlogPost);
app.get('/home/blog', Controllers_1.BlogController.index);
app.get('/home/blog/:sku', Controllers_1.BlogController.show);
app.get('/home/products', Controllers_1.ProductController.index);
app.get(/\/home\/products\/([A-Za-z0-9_-]+\/?)$/, Controllers_1.ProductController.show);
//app.get('/home/products/:sku', ProductController.show)
app.use(function (err, req, res, next) {
    console.log("Got an error");
    console.error(err);
    res.status(500).send();
});
app.listen(PORT, function () {
    console.log("Listen on http://localhost:" + PORT);
});
//# sourceMappingURL=main.js.map