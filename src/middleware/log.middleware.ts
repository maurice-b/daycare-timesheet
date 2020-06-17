import { Middleware, MiddlewareTarget, Context, moment } from "../deps.ts";
import { LogWrapper } from "../utils/log-wrapper.ts";


@Middleware(new RegExp("/"))
export class LogMiddleware implements MiddlewareTarget<unknown> {
    private date: Date = new Date();

    public constructor(private logWrapper: LogWrapper) {

    }

    public onPreRequest(context: Context<unknown>) {
        return new Promise((resolve, reject) => {
            this.date = new Date();
            LogWrapper.instance().info(`[${this.constructor.name}] Start request: ${moment(this.date).format("YYYY-MM-DD HH:mm:ss")}`);
            resolve();
        });
    }

    public onPostRequest(context: Context<unknown>) {
        return new Promise((resolve, reject) => {
            const now = new Date();
            const totalExecutionTime = now.getTime() - this.date.getTime();
            LogWrapper.instance().info(`[${this.constructor.name}] End request: ${moment(now).format("YYYY-MM-DD HH:mm:ss")} - total execution time: ${totalExecutionTime} ms`);
            resolve();
        });
    }
}