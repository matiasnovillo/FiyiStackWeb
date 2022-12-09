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

//7 fields | 0 models depend on this model | Last modification on: 09/12/2022 19:23:30 | Stack: 9

export class SexModel {

    //Fields
    SexId?: number;
	Name?: string | string[] | number | undefined;
	Active?: boolean;
	UserCreationId?: number;
	UserLastModificationId?: number;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;

    //Queries
    static Select1BySexId(SexId: number) {
        let URL = "/api/BasicCulture/Sex/1/Select1BySexIdToJSON/" + SexId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/BasicCulture/Sex/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(sexmodelQuery: sexmodelQuery) {
        let URL = "/api/BasicCulture/Sex/1/SelectAllPagedToJSON";
        let Body = {
            QueryString: sexmodelQuery.QueryString,
            ActualPageNumber: sexmodelQuery.ActualPageNumber,
            RowsPerPage: sexmodelQuery.RowsPerPage,
            SorterColumn: sexmodelQuery.SorterColumn,
            SortToggler: sexmodelQuery.SortToggler,
            RowCount: sexmodelQuery.TotalRows,
            TotalPages: sexmodelQuery.TotalPages,
            lstSexModel: sexmodelQuery.lstSexModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.put(URL, Body, Header));
    }

    //Non-Queries
    static DeleteBySexId(SexId: number | string | string[] | undefined) {
        let URL = "/api/BasicCulture/Sex/1/DeleteBySexId/" + SexId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/BasicCulture/Sex/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyBySexId(SexId: string | number | string[] | undefined) {
        let URL = "/api/BasicCulture/Sex/1/CopyBySexId/" + SexId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/Sexing/Sex/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}

export class sexmodelQuery {
    QueryString ?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstSexModel?: SexModel[];
}