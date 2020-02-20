# Umbraco Heartcore Node.js Vue sample

Node.js Vue sample site for Umbraco Heartcore

## Features

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Vue CLI](https://cli.vuejs.org/)

## Prerequisites

To run this sample you will need the following tools installed

- [Node.js](https://nodejs.org/en/) 10 or newer

## Getting Started

Before running the application, you need to copy `.env` to `.env.local` and update it with your Umbraco Heartcore
 project alias (the project alias can be found in the [Umbraco Cloud Portal](https://www.s1.umbraco.io)).

```env
VUE_APP_UMBRACO__PROJECTALIAS=
```

In order to use the sample you will need an Umbraco Hearctore project with content, media and document types that correspond to those setup in the views and templates of the sample website. You can use `demo-headless` as the project alias to get started with the sample. The Project behind this alias has been used as the source of the sample, so its a good place to start.

### Installation

To install dependencies, run the following command

```bash
> npm install
```

### Usage

Run the following command to start the site

```bash
> npm run serve
```

This will start a dev webserver listening on `http://localhost:8081`
