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

//8 fields | Last modification on: 16/12/2022 10:50:17 | Stack: 9

export class CommentForBlogModel {

    //Fields
    CommentForBlogId?: number;
	Active?: boolean;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;
	UserCreationId?: number;
	UserLastModificationId?: number;
	Comment?: string | string[] | number | undefined;
    BlogId?: number;
    FantasyName?: string | string[] | number | undefined;

    //Queries
    static Select1ByCommentForBlogId(CommentForBlogId: number) {
        let URL = "/api/FiyiStack/CommentForBlog/1/Select1ByCommentForBlogIdToJSON/" + CommentForBlogId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/FiyiStack/CommentForBlog/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(commentforblogmodelQuery: commentforblogmodelQuery) {
        let URL = "/api/FiyiStack/CommentForBlog/1/SelectAllPagedToJSON";
        let Body = {
            QueryString: commentforblogmodelQuery.QueryString,
            ActualPageNumber: commentforblogmodelQuery.ActualPageNumber,
            RowsPerPage: commentforblogmodelQuery.RowsPerPage,
            SorterColumn: commentforblogmodelQuery.SorterColumn,
            SortToggler: commentforblogmodelQuery.SortToggler,
            RowCount: commentforblogmodelQuery.TotalRows,
            TotalPages: commentforblogmodelQuery.TotalPages,
            lstCommentForBlogModel: commentforblogmodelQuery.lstCommentForBlogModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.put(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByCommentForBlogId(CommentForBlogId: number | string | string[] | undefined) {
        let URL = "/api/FiyiStack/CommentForBlog/1/DeleteByCommentForBlogId/" + CommentForBlogId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/FiyiStack/CommentForBlog/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByCommentForBlogId(CommentForBlogId: string | number | string[] | undefined) {
        let URL = "/api/FiyiStack/CommentForBlog/1/CopyByCommentForBlogId/" + CommentForBlogId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/CommentForBloging/CommentForBlog/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}

export class commentforblogmodelQuery {
    QueryString ?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstCommentForBlogModel?: CommentForBlogModel[];
}