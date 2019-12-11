const express = require("express");
const app = express();

//body-parser and Middleware
const cors = require("cors");
const corsMiddleware = cors();
const bodyParser = require("body-parser");
const bodyParserMiddleware = bodyParser.json();

// Model and router
const AdvertisementRouter = require("./ads/router");

const port = process.env.PORT || 4000;

require("./vinyl");

app
  .use(corsMiddleware)
  .use(bodyParserMiddleware)
  .use(AdvertisementRouter);

app.listen(port, () => console.log(`listening on :${port}`));
