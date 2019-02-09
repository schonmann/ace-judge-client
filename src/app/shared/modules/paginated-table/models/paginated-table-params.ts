import { TableColumn } from '../../table/models/table-column';

type PromiseReturn = (a) => Promise<any>;

export interface PaginatedTableParams {
    columns : TableColumn[];
    itemsPerPage : number;
    retrievePage : PromiseReturn;
    clickItem : any;
}