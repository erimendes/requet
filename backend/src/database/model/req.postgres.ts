import { SchemaType } from "../../Schema";
import { dbQueryInsert } from "../postgresdb";

interface IfindOne {
    message: string;
}

const create = async ({ message }: IfindOne): Promise<SchemaType> => {
    return await dbQueryInsert(`INSERT INTO request(message) VALUES(?)`,[ message ]);
}

export default {
    create
}
