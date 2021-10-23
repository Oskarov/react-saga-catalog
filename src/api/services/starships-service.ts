import {IStarship} from "../../interfaces/starships";
import httpClient from "../httpClient";
import {IApiCatalogRespond} from "../../interfaces";
import {AxiosRequestConfig} from "axios";

const starshipsService = {
    async getAll(cancelToken: any): Promise<IStarship[] | false> {
        let requestConfig:  AxiosRequestConfig<any> ={
            url: 'starships',
            method: 'GET',
        }
        if (cancelToken){
            requestConfig.cancelToken = cancelToken.token;
            console.log(cancelToken.token);
        }

        console.log('getAll');
        try {
            const sData: IApiCatalogRespond = await httpClient.request(requestConfig)
            return sData.data.results as IStarship[];
        } catch (e) {
            return false;
        }
    },
};

export default starshipsService;