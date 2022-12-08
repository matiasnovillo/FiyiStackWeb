CREATE PROCEDURE [dbo].[BasicCore.Failure.Select1ByFailureId]
(
    @FailureId INT
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
EXEC [dbo].[Failure.Select1ByFailureId]
    @FailureId = 1
 *
 */

--Last modification on: 08/12/2022 7:45:13

SET DATEFORMAT DMY

SELECT
    [BasicCore.Failure].[FailureId] AS [FailureId],
    [BasicCore.Failure].[HTTPCode] AS [HTTPCode],
    [BasicCore.Failure].[EmergencyLevel] AS [EmergencyLevel],
    [BasicCore.Failure].[Message] AS [Message],
    [BasicCore.Failure].[StackTrace] AS [StackTrace],
    [BasicCore.Failure].[Source] AS [Source],
    [BasicCore.Failure].[Comment] AS [Comment],
    [BasicCore.Failure].[Active] AS [Active],
    [BasicCore.Failure].[UserCreationId] AS [UserCreationId],
    [BasicCore.Failure].[UserLastModificationId] AS [UserLastModificationId],
    [BasicCore.Failure].[DateTimeCreation] AS [DateTimeCreation],
    [BasicCore.Failure].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [BasicCore.Failure]
WHERE 
    1 = 1
    AND [BasicCore.Failure].[FailureId] = @FailureId
ORDER BY 
    [BasicCore.Failure].[FailureId]