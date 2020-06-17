import { Singleton, Log } from "../deps.ts";

@Singleton()
export class LogWrapper {

    public async config() {

        // custom configuration with 2 loggers (the default and `tasks` loggers)
        await Log.setup({
            handlers: {
                console: new Log.handlers.ConsoleHandler("DEBUG"),

                file: new Log.handlers.FileHandler("WARNING", {
                    filename: "./log.txt",
                    // you can change format of output message using any keys in `LogRecord`
                    formatter: "{levelName} {msg}",
                }),
            },

            loggers: {
                // configure default logger available via short-hand methods above
                default: {
                    level: "DEBUG",
                    handlers: ["console", "file"],
                },

                tasks: {
                    level: "ERROR",
                    handlers: ["console"],
                },
            },
        });


    }

    public static instance(name?: string) {
        return Log.getLogger(name);
    }
}
