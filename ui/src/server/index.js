import React from 'react';
import App from '../App';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import DBClient from './DBClient';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const bodyParser = require('body-parser');

const server = express();

server
  .use(bodyParser.json({ type: 'application/json' }))
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .post('/api', async (req, res) => {
    const dbClient = new DBClient();

    try {
      await dbClient.connect();

      const dbResponse = await dbClient.query(req.body.query);

      res.send(dbResponse);
    } catch (error) {
      await dbClient.end();

      res.status(500).send({ error: error.toString() });
    }
  })
  .get('/*', (req, res) => {
    const context = {};
    const sheet = new ServerStyleSheet();

    const markup = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </StyleSheetManager>
    );

    const styleTags = sheet.getStyleTags();

    sheet.seal();

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Restless Bandit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body style="margin: 0; background-color: #eee;">
        <div id="root">${markup}</div>
    </body>
    ${styleTags}
</html>`
      );
    }
  });

export default server;
