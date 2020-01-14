const umbraco = require("@umbraco/headless-client");
const Client = umbraco.Client;
const FormData = umbraco.FormData.default;
const fs = require("fs");
const path = require("path");

const client = new Client({
  projectAlias: "the-unique-alias", // https://[here is your alias].s1.umbraco.io/
  language: "en-US",
  apiKey: process.env.UMBRACO_KEY
});

// A file name for an image
const IMAGE_NAME = "image.jpeg";

// Start new form
const form = new FormData();

// Send information in 'content' field as JSON
form.append(
  "content",
  JSON.stringify({
    mediaTypeAlias: "Image",
    // Media Folder UUID (the long one)
    parentId: "click-on-folder-and-then-info",
    name: "File name",
    umbracoFile: { src: IMAGE_NAME }
  })
);

// Send file in 'umbracoFile' field
form.append(
  "umbracoFile",
  fs.createReadStream(path.join(__dirname, IMAGE_NAME))
);

console.log(`Sending ${IMAGE_NAME} to Umbraco Media`);

client.management.media
  .create(form)
  .then(res => {
    console.log("Umbraco Media response", res);
  })
  .catch(err => {
    const {
      jsonData: {
        error: { details }
      }
    } = err;
    console.log("Umbraco Media Error", details || err);
  });
