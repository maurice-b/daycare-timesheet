import { CorsBuilder, App, Context, Content, HttpError, HTTPOptions } from "./deps.ts";

import { HomeArea } from "./areas/home/home.area.ts";
import { LogWrapper, DatabaseWrapper } from "./utils/mod.ts";
import { LogMiddleware } from "./middleware/mod.ts";

// Logging
const logWrapper = new LogWrapper();
await logWrapper.config()

// Database connection
const db = new DatabaseWrapper();
db.link();
await db.sync();

const app = new App({
  areas: [HomeArea],
  middlewares: [LogMiddleware],
  logging: true

});

app.useCors(
  new CorsBuilder()
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader(),
);

// added global error handler
app.error((context: Context<any>, error: Error) => {
  context.response.result = Content("This page unprocessed error", (error as HttpError).httpCode || 500);
  context.response.setImmediately();
});


const hostOptions: HTTPOptions = {
  port: 8080,
  hostname: ''
}
app.listen(hostOptions);
