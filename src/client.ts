import { ClientConfig, Config } from "../types/global";
import * as URL from "./urls";

export default class Client {
    public config: ClientConfig;
    constructor(config: Config & ClientConfig) {
        if (!config.accessToken) {
          throw new Error("no access token");
        }

        this.config = config;
    }
}
