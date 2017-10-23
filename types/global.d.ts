import * as Models from "./models";
import * as Requests from "./requests";
    
export type ClientConfig = {
    accessToken: string,
};

export type Config = ClientConfig

export interface IResultSet<T> {
    items: T[];
    count: number;   
}
export interface ISummaryResultSet<T, TSummary> {
    items?: T[];
    count?: number;   
    summary: TSummary;
}

export interface IListOptions {
    Sort?: string | undefined;
    Page?: number | undefined;
    Size?: number | undefined;
    Search?: string | undefined;
}

export interface IFilteredListOptions<TFilter> extends IListOptions {
    filter?: TFilter;
}