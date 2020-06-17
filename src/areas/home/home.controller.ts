
import { FooService } from "../../services/foo.service.ts";

import { FlightModel } from "../../repository/models/mod.ts";
import { Controller, Get, QueryParam } from "../../deps.ts";

@Controller("/home")
export class HomeController {
  name: string | undefined = undefined;

  constructor(private service: FooService) { }

  @Get("/text")
  public async text(@QueryParam("name") name: string) {

    const flight = new FlightModel();
    flight.departure = 'London';
    flight.destination = 'San Francisco';
    await flight.save();

    return `Hey! ${this.service.getName()}, ${name}`;
  }
}
