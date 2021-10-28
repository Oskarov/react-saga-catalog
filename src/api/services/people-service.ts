import httpClient from "../httpClient";
import {IImportPeopleList} from "../../interfaces/people";
import {IApiCatalogRespond} from "../../interfaces";

const peopleService = {
    async getList(page: string, search: string): Promise<IImportPeopleList | false> {
        try {
            const result: IApiCatalogRespond = await httpClient.request({
                url: `people?page=${page}&search=${search}`,
                method: 'GET',
            });
            return result.data as IImportPeopleList
        } catch (e) {
            return false;
        }
    },
};

export default peopleService;