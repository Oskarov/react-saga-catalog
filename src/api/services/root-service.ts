import httpClient from "../httpClient";
import {IRootUrls} from "../../interfaces";

const rootService = {
    async getInitialData(): Promise<IRootUrls[] | false> {
        try {
            return await httpClient.request({
                url: '/',
                method: 'GET',
            });
        } catch (e) {
            return false;
        }
    },
};

export default rootService;