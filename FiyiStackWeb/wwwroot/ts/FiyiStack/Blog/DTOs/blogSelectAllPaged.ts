import { BlogModel } from "../TsModels/Blog_TsModel";

export class blogSelectAllPaged {
    QueryString?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstBlogModel?: BlogModel[] | undefined;
}