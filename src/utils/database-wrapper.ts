import { Singleton, Database } from "../deps.ts";
import { FlightModel } from "../repository/models/mod.ts";


@Singleton()
export class DatabaseWrapper {
    private db: Database;

    constructor() {

        // this.db = new Database(
        //     {
        //         dialect: "mysql",
        //         debug: true,
        //     }, {
        //     host: "127.0.0.1",
        //     username: "root",
        //     password: "geheim",
        //     database: "airlines",
        //     port: 3306,
        // });

        this.db = new Database(
            {
                dialect: "postgres",
                debug: true,
            }, {
            host: "127.0.0.1",
            username: "postgres",
            password: "pwd",
            database: "airlines",
            port: 5432,
        });
    }

    public link() {
        this.db.link([FlightModel]);
    }

    public async sync() {
        return await this.db.sync({ drop: true });
    }
}


