CREATE PROCEDURE [dbo].[BasicCulture.Province.SelectAll]

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
EXEC [dbo].[BasicCulture.Province.SelectAll]
 *
 */

--Last modification on: 09/12/2022 19:23:15

SET DATEFORMAT DMY

SELECT
    [BasicCulture.Province].[ProvinceId] AS [ProvinceId],
    [BasicCulture.Province].[Name] AS [Name],
    [BasicCulture.Province].[GeographicalCoordinates] AS [GeographicalCoordinates],
    [BasicCulture.Province].[Code] AS [Code],
    [BasicCulture.Province].[CountryId] AS [CountryId],
    [BasicCulture.Province].[Active] AS [Active],
    [BasicCulture.Province].[UserCreationId] AS [UserCreationId],
    [BasicCulture.Province].[UserLastModificationId] AS [UserLastModificationId],
    [BasicCulture.Province].[DateTimeCreation] AS [DateTimeCreation],
    [BasicCulture.Province].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [BasicCulture.Province]
ORDER BY 
    [BasicCulture.Province].[ProvinceId]