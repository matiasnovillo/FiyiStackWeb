CREATE PROCEDURE [dbo].[CMSCore.Role.Count]

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
DECLARE	@Counter int

EXEC	@Counter = [dbo].[CMSCore.Role.Count]

SELECT	'Counter' = @Counter
 *
 */

--Last modification on: 09/12/2022 19:22:49

SELECT 
	COUNT(*)
FROM 
	[CMSCore.Role]