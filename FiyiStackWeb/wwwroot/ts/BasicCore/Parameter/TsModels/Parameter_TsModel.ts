import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";

/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 * 
 * Coded by fiyistack.com
 * Copyright © 2022
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
*/

//9 fields | Last modification on: 20/12/2022 18:17:17 | Stack: 9

export class ParameterModel {

    //Fields
    ParameterId?: number;
	Name?: string | string[] | number | undefined;
	Value?: string | string[] | number | undefined;
	IsPrivate?: boolean;
	Active?: boolean;
	UserCreationId?: number;
	UserLastModificationId?: number;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;

    //Queries
    static Select1ByParameterId(ParameterId: number) {
        let URL = "/api/BasicCore/Parameter/1/Select1ByParameterIdToJSON/" + ParameterId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/BasicCore/Parameter/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(parametermodelQuery: parametermodelQuery) {
        let URL = "/api/BasicCore/Parameter/1/SelectAllPagedToJSON";
        let Body = {
            QueryString: parametermodelQuery.QueryString,
            ActualPageNumber: parametermodelQuery.ActualPageNumber,
            RowsPerPage: parametermodelQuery.RowsPerPage,
            SorterColumn: parametermodelQuery.SorterColumn,
            SortToggler: parametermodelQuery.SortToggler,
            RowCount: parametermodelQuery.TotalRows,
            TotalPages: parametermodelQuery.TotalPages,
            lstParameterModel: parametermodelQuery.lstParameterModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.put(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByParameterId(ParameterId: number | string | string[] | undefined) {
        let URL = "/api/BasicCore/Parameter/1/DeleteByParameterId/" + ParameterId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/BasicCore/Parameter/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByParameterId(ParameterId: string | number | string[] | undefined) {
        let URL = "/api/BasicCore/Parameter/1/CopyByParameterId/" + ParameterId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/Parametering/Parameter/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}

export class parametermodelQuery {
    QueryString ?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstParameterModel?: ParameterModel[];
}