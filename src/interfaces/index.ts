export interface IRootUrls {
    [key: string]: string
}

export interface IAppState {
    loading: boolean,
    urls: IRootUrls
}