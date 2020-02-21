# Umbraco Heartcore Gridsome sample

Gridsome sample site for Umbraco Heartcore.

## Features

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Gridsome](https://gridsome.org/)

## Prerequisites

To run this sample you will need the following tools installed

- [Node.js](https://nodejs.org/en/) 10 or newer

## Getting Started

Before running the application, you need to copy `.env` to `.env.development` or `.env.production` and update it with your Umbraco Heartcore
 project alias (the project alias can be found in the [Umbraco Cloud Portal](https://www.s1.umbraco.io)) and an API Key if the Content Delivery API is protected.

```env
UMBRACO__PROJECTALIAS=
UMBRACO__APIKEY=
```

In order to use the sample you will need an Umbraco Heartcore project with content, media and document types that correspond to those setup in the views and templates of the sample website. You can use `demo-headless` as the project alias to get started with the sample. The Project behind this alias has been used as the source of the sample, so its a good place to start.

The `ApiKey` is not used in this sample and can thus be left blank. If you chose to protect the content exposed via the Content Delivery API then you will need an API-Key, but its an option that has to be actively turned on (or off - its off by default) via the Umbraco Backoffice in the Headless tree in the Settings section.

### Installation

To install dependencies, run the following command

```bash
> npm install
```

### Usage

Run the following command to start the site

```bash
> npm run develop
```

This will start a dev webserver listening on `http://localhost:8081`

### Generate a static website

To generate a static version of the website run the following command

```bash
> npm run build
```

This will generate the a static website in the `dist` directory.
