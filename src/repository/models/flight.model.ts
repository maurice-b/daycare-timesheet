import { FlightModelInterface } from "../interfaces/flight.model.interface.ts";
import { Model, DataTypes } from "../../deps.ts";

export class FlightModel extends Model implements FlightModelInterface {
  static table = "flights";
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    departure: DataTypes.STRING,
    destination: DataTypes.STRING,
    flightDuration: DataTypes.FLOAT,
  };

  static defaults = {
    flightDuration: 2.5,
  };

  public departure = "";
  public destination = "";
  public flightDuration = FlightModel.defaults.flightDuration;
}


