CREATE PROCEDURE [dbo].[FiyiStack.Blog.SelectAll]

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
EXEC [dbo].[FiyiStack.Blog.SelectAll]
 *
 */

--Last modification on: 16/12/2022 10:50:10

SET DATEFORMAT DMY

SELECT
    [FiyiStack.Blog].[BlogId] AS [BlogId],
    [FiyiStack.Blog].[Active] AS [Active],
    [FiyiStack.Blog].[DateTimeCreation] AS [DateTimeCreation],
    [FiyiStack.Blog].[DateTimeLastModification] AS [DateTimeLastModification],
    [FiyiStack.Blog].[UserCreationId] AS [UserCreationId],
    [FiyiStack.Blog].[UserLastModificationId] AS [UserLastModificationId],
    [FiyiStack.Blog].[Title] AS [Title],
    [FiyiStack.Blog].[Body] AS [Body],
    [FiyiStack.Blog].[BackgroundImage] AS [BackgroundImage]
FROM 
    [FiyiStack.Blog]
ORDER BY 
    [FiyiStack.Blog].[BlogId]