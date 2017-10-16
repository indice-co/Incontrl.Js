import * as qs from "querystring";

const baseURL: string = process.env.API_BASE_URL || "https://api.incontrl.io/";

const apiURL = (path: string, query?: object) =>
  baseURL + path + (query ? `?${qs.stringify(query)}` : "");
