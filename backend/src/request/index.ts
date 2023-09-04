import { SchemaType } from "../Schema";

export interface IRequest {
    name:   string;
    create?:    (data: SchemaType) => Promise<SchemaType>;
}