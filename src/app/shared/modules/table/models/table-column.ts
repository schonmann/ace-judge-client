export interface TableColumn {
    label : string;
    field : string | Function;
    click? : any;
}