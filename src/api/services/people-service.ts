import httpClient from "../httpClient";
import {IImportPeopleList, IPeople} from "../../interfaces/people";
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
    async getPeopleTarget(id:number): Promise<IPeople | false> {
        try {
            const result: any = await httpClient.request({
                url: `people/${id}`,
                method: 'GET',
            });
            console.log(result)
            return result.data as IPeople
        } catch (e) {
            return false;
        }
    },
};

export default peopleService;