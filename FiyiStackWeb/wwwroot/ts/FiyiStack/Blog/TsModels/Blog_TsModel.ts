import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";

/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 * Licensed to a unique person with this Token:IAmTheOwnerOfThis
 * 
 * Coded by www.fiyistack.com
 * Copyright © 2021
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * Auto generated code. Add your custom code after the last line of auto generation
*/

//9 fields | Last modification on: 16/12/2022 10:50:10 | Stack: 9

export class BlogModel {

    //Fields
    BlogId?: number;
	Active?: boolean;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;
	UserCreationId?: number;
	UserLastModificationId?: number;
	Title?: string | string[] | number | undefined;
	Body?: string | string[] | number | undefined;
	BackgroundImage?: string | string[] | number | undefined;

    //Queries
    static Select1ByBlogId(BlogId: number) {
        let URL = "/api/FiyiStack/Blog/1/Select1ByBlogIdToJSON/" + BlogId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/FiyiStack/Blog/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(blogmodelQuery: blogmodelQuery) {
        let URL = "/api/FiyiStack/Blog/1/SelectAllPagedToJSON";
        let Body = {
            QueryString: blogmodelQuery.QueryString,
            ActualPageNumber: blogmodelQuery.ActualPageNumber,
            RowsPerPage: blogmodelQuery.RowsPerPage,
            SorterColumn: blogmodelQuery.SorterColumn,
            SortToggler: blogmodelQuery.SortToggler,
            RowCount: blogmodelQuery.TotalRows,
            TotalPages: blogmodelQuery.TotalPages,
            lstBlogModel: blogmodelQuery.lstBlogModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.put(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByBlogId(BlogId: number | string | string[] | undefined) {
        let URL = "/api/FiyiStack/Blog/1/DeleteByBlogId/" + BlogId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/FiyiStack/Blog/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByBlogId(BlogId: string | number | string[] | undefined) {
        let URL = "/api/FiyiStack/Blog/1/CopyByBlogId/" + BlogId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/Bloging/Blog/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}

export class blogmodelQuery {
    QueryString ?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstBlogModel?: BlogModel[];
}