import * as URL from "./urls";

export default class Client {
    public config: Incontrl.ClientConfig;
    constructor(config: Incontrl.Config & Incontrl.ClientConfig) {
        if (!config.accessToken) {
          throw new Error("no access token");
        }

        this.config = config;
    }
}
