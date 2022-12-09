CREATE PROCEDURE [dbo].[CMSCore.RoleMenu.Select1ByRoleMenuId]
(
    @RoleMenuId INT
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
EXEC [dbo].[RoleMenu.Select1ByRoleMenuId]
    @RoleMenuId = 1
 *
 */

--Last modification on: 09/12/2022 19:22:56

SET DATEFORMAT DMY

SELECT
    [CMSCore.RoleMenu].[RoleMenuId] AS [RoleMenuId],
    [CMSCore.RoleMenu].[RoleId] AS [RoleId],
    [CMSCore.RoleMenu].[MenuId] AS [MenuId],
    [CMSCore.RoleMenu].[Active] AS [Active],
    [CMSCore.RoleMenu].[UserCreationId] AS [UserCreationId],
    [CMSCore.RoleMenu].[UserLastModificationId] AS [UserLastModificationId],
    [CMSCore.RoleMenu].[DateTimeCreation] AS [DateTimeCreation],
    [CMSCore.RoleMenu].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [CMSCore.RoleMenu]
WHERE 
    1 = 1
    AND [CMSCore.RoleMenu].[RoleMenuId] = @RoleMenuId
ORDER BY 
    [CMSCore.RoleMenu].[RoleMenuId]