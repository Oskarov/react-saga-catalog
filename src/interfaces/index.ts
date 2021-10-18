export interface IRootUrls {
    [key: string]: string
}

export interface IAppState {
    loading: boolean,
    urls: IRootUrls
}

export interface IApiRespond {
    data: {
        [key: string] : any;
    }
}

export interface IApiCatalogRespond {
    data: {
        results: any[]
    }
}