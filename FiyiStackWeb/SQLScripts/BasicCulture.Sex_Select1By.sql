CREATE PROCEDURE [dbo].[BasicCulture.Sex.Select1BySexId]
(
    @SexId INT
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
EXEC [dbo].[Sex.Select1BySexId]
    @SexId = 1
 *
 */

--Last modification on: 09/12/2022 19:23:30

SET DATEFORMAT DMY

SELECT
    [BasicCulture.Sex].[SexId] AS [SexId],
    [BasicCulture.Sex].[Name] AS [Name],
    [BasicCulture.Sex].[Active] AS [Active],
    [BasicCulture.Sex].[UserCreationId] AS [UserCreationId],
    [BasicCulture.Sex].[UserLastModificationId] AS [UserLastModificationId],
    [BasicCulture.Sex].[DateTimeCreation] AS [DateTimeCreation],
    [BasicCulture.Sex].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [BasicCulture.Sex]
WHERE 
    1 = 1
    AND [BasicCulture.Sex].[SexId] = @SexId
ORDER BY 
    [BasicCulture.Sex].[SexId]