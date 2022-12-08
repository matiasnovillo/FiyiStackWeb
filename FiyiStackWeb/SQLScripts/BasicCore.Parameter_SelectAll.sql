CREATE PROCEDURE [dbo].[BasicCore.Parameter.SelectAll]

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
EXEC [dbo].[BasicCore.Parameter.SelectAll]
 *
 */

--Last modification on: 08/12/2022 8:07:23

SET DATEFORMAT DMY

SELECT
    [BasicCore.Parameter].[ParameterId] AS [ParameterId],
    [BasicCore.Parameter].[Name] AS [Name],
    [BasicCore.Parameter].[Value] AS [Value],
    [BasicCore.Parameter].[IsPrivate] AS [IsPrivate],
    [BasicCore.Parameter].[Active] AS [Active],
    [BasicCore.Parameter].[UserCreationId] AS [UserCreationId],
    [BasicCore.Parameter].[UserLastModificationId] AS [UserLastModificationId],
    [BasicCore.Parameter].[DateTimeCreation] AS [DateTimeCreation],
    [BasicCore.Parameter].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [BasicCore.Parameter]
ORDER BY 
    [BasicCore.Parameter].[ParameterId]