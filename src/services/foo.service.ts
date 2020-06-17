import { Injectable } from "../deps.ts";

@Injectable()
export class FooService {
  public getName(): string {
    return "My name is Foo";
  }
}
