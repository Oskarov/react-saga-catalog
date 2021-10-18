import httpClient from "../httpClient";
import {IApiRespond, IRootUrls} from "../../interfaces";

const rootService = {
    async getInitialData(): Promise<IRootUrls | false> {
        try {
            const sData:IApiRespond = await httpClient.request({
                url: '/',
                method: 'GET',
            });
            return sData.data as IRootUrls;
        } catch (e) {
            return false;
        }
    },
};

export default rootService;