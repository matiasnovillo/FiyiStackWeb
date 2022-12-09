CREATE PROCEDURE [dbo].[CMSCore.Role.Select1ByRoleId]
(
    @RoleId INT
)

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
EXEC [dbo].[Role.Select1ByRoleId]
    @RoleId = 1
 *
 */

--Last modification on: 09/12/2022 19:22:49

SET DATEFORMAT DMY

SELECT
    [CMSCore.Role].[RoleId] AS [RoleId],
    [CMSCore.Role].[Name] AS [Name],
    [CMSCore.Role].[Active] AS [Active],
    [CMSCore.Role].[UserCreationId] AS [UserCreationId],
    [CMSCore.Role].[UserLastModificationId] AS [UserLastModificationId],
    [CMSCore.Role].[DateTimeCreation] AS [DateTimeCreation],
    [CMSCore.Role].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [CMSCore.Role]
WHERE 
    1 = 1
    AND [CMSCore.Role].[RoleId] = @RoleId
ORDER BY 
    [CMSCore.Role].[RoleId]