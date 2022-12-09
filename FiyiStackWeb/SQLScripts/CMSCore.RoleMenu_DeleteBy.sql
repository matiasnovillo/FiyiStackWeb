CREATE PROCEDURE [dbo].[CMSCore.RoleMenu.DeleteByRoleMenuId]
(
    @RoleMenuId INT,
    @RowsAffected INT OUTPUT
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
DECLARE	@RowsAffected INT
EXEC [dbo].[CMSCore.RoleMenu.DeleteByRoleMenuId]
    @RoleMenuId = 1,
    @RowsAffected = @RowsAffected OUTPUT
SELECT @RowsAffected AS N'@RowsAffected'
 *
 */

--Last modification on: 09/12/2022 19:22:56

DELETE FROM 
    [CMSCore.RoleMenu]
WHERE 
    1 = 1
    AND [CMSCore.RoleMenu].[RoleMenuId] = @RoleMenuId

SELECT @RowsAffected = @@ROWCOUNT