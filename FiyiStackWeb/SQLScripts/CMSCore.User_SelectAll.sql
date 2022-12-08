CREATE PROCEDURE [dbo].[CMSCore.User.SelectAll]

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
EXEC [dbo].[CMSCore.User.SelectAll]
 *
 */

--Last modification on: 08/12/2022 10:43:01

SET DATEFORMAT DMY

SELECT
    [CMSCore.User].[UserId] AS [UserId],
    [CMSCore.User].[FantasyName] AS [FantasyName],
    [CMSCore.User].[Email] AS [Email],
    [CMSCore.User].[Password] AS [Password],
    [CMSCore.User].[ProfileImageURL] AS [ProfileImageURL],
    [CMSCore.User].[DateTimeBirth] AS [DateTimeBirth],
    [CMSCore.User].[VerificationToken] AS [VerificationToken],
    [CMSCore.User].[CookieToken] AS [CookieToken],
    [CMSCore.User].[RoleId] AS [RoleId],
    [CMSCore.User].[Active] AS [Active],
    [CMSCore.User].[UserCreationId] AS [UserCreationId],
    [CMSCore.User].[UserLastModificationId] AS [UserLastModificationId],
    [CMSCore.User].[DateTimeCreation] AS [DateTimeCreation],
    [CMSCore.User].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [CMSCore.User]
ORDER BY 
    [CMSCore.User].[UserId]