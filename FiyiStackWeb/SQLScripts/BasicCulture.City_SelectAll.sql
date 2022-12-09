CREATE PROCEDURE [dbo].[BasicCulture.City.SelectAll]

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
EXEC [dbo].[BasicCulture.City.SelectAll]
 *
 */

--Last modification on: 09/12/2022 19:23:11

SET DATEFORMAT DMY

SELECT
    [BasicCulture.City].[CityId] AS [CityId],
    [BasicCulture.City].[Name] AS [Name],
    [BasicCulture.City].[GeographicalCoordinates] AS [GeographicalCoordinates],
    [BasicCulture.City].[Code] AS [Code],
    [BasicCulture.City].[ProvinceId] AS [ProvinceId],
    [BasicCulture.City].[Active] AS [Active],
    [BasicCulture.City].[UserCreationId] AS [UserCreationId],
    [BasicCulture.City].[UserLastModificationId] AS [UserLastModificationId],
    [BasicCulture.City].[DateTimeCreation] AS [DateTimeCreation],
    [BasicCulture.City].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [BasicCulture.City]
ORDER BY 
    [BasicCulture.City].[CityId]