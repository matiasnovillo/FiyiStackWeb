CREATE PROCEDURE [dbo].[FiyiStack.CommentForBlog.SelectAll]

AS

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
 * Auto generated code. It should not be modified from here.
 */

/*
 * Execute this stored procedure with the next script as example
 *
EXEC [dbo].[FiyiStack.CommentForBlog.SelectAll]
 *
 */

--Last modification on: 16/12/2022 10:50:17

SET DATEFORMAT DMY

SELECT
    [FiyiStack.CommentForBlog].[CommentForBlogId] AS [CommentForBlogId],
    [FiyiStack.CommentForBlog].[Active] AS [Active],
    [FiyiStack.CommentForBlog].[DateTimeCreation] AS [DateTimeCreation],
    [FiyiStack.CommentForBlog].[DateTimeLastModification] AS [DateTimeLastModification],
    [FiyiStack.CommentForBlog].[UserCreationId] AS [UserCreationId],
    [FiyiStack.CommentForBlog].[UserLastModificationId] AS [UserLastModificationId],
    [FiyiStack.CommentForBlog].[Comment] AS [Comment],
    [FiyiStack.CommentForBlog].[BlogId] AS [BlogId]
FROM 
    [FiyiStack.CommentForBlog]
ORDER BY 
    [FiyiStack.CommentForBlog].[CommentForBlogId]