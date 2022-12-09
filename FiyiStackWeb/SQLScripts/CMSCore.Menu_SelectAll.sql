CREATE PROCEDURE [dbo].[CMSCore.Menu.SelectAll]

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
EXEC [dbo].[CMSCore.Menu.SelectAll]
 *
 */

--Last modification on: 09/12/2022 19:23:03

SET DATEFORMAT DMY

SELECT
    [CMSCore.Menu].[MenuId] AS [MenuId],
    [CMSCore.Menu].[Name] AS [Name],
    [CMSCore.Menu].[MenuFatherId] AS [MenuFatherId],
    [CMSCore.Menu].[Order] AS [Order],
    [CMSCore.Menu].[URLPath] AS [URLPath],
    [CMSCore.Menu].[IconURLPath] AS [IconURLPath],
    [CMSCore.Menu].[Active] AS [Active],
    [CMSCore.Menu].[UserCreationId] AS [UserCreationId],
    [CMSCore.Menu].[UserLastModificationId] AS [UserLastModificationId],
    [CMSCore.Menu].[DateTimeCreation] AS [DateTimeCreation],
    [CMSCore.Menu].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [CMSCore.Menu]
ORDER BY 
    [CMSCore.Menu].[MenuId]