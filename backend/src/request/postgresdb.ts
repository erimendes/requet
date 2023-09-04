import { IRequest } from ".";
import Model from '../database/';
import { SchemaType } from "../Schema";

export const Request: IRequest = {
    name: 'Pattem',

    create: async (data) => {
        const newRow = await Model.create(data);

        return newRow;
    }
}