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

//12 fields | 0 models depend on this model | Last modification on: 07/12/2022 17:01:54 | Stack: 9

export class FailureModel {

    //Fields
    FailureId?: number;
	HTTPCode?: number;
	EmergencyLevel?: number;
	Message?: string | string[] | number | undefined;
	StackTrace?: string | string[] | number | undefined;
	Source?: string | string[] | number | undefined;
	Comment?: string | string[] | number | undefined;
	Active?: boolean;
	UserCreationId?: number;
	UserLastModificationId?: number;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;

    //Queries
    static Select1ByFailureId(FailureId: number) {
        let URL = "/api/Basic.Core/Failure/1/Select1ByFailureIdToJSON/" + FailureId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/Basic.Core/Failure/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(failuremodelQuery: failuremodelQuery) {
        let URL = "/api/Basic.Core/Failure/1/SelectAllPagedToJSON";
        let Body = {
            QueryString: failuremodelQuery.QueryString,
            ActualPageNumber: failuremodelQuery.ActualPageNumber,
            RowsPerPage: failuremodelQuery.RowsPerPage,
            SorterColumn: failuremodelQuery.SorterColumn,
            SortToggler: failuremodelQuery.SortToggler,
            RowCount: failuremodelQuery.TotalRows,
            TotalPages: failuremodelQuery.TotalPages,
            lstFailureModel: failuremodelQuery.lstFailureModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.put(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByFailureId(FailureId: number | string | string[] | undefined) {
        let URL = "/api/Basic.Core/Failure/1/DeleteByFailureId/" + FailureId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/Basic.Core/Failure/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByFailureId(FailureId: string | number | string[] | undefined) {
        let URL = "/api/Basic.Core/Failure/1/CopyByFailureId/" + FailureId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/Failureing/Failure/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}

export class failuremodelQuery {
    QueryString ?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstFailureModel?: FailureModel[];
}