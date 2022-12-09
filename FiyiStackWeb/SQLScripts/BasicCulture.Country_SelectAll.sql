CREATE PROCEDURE [dbo].[BasicCulture.Country.SelectAll]

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
EXEC [dbo].[BasicCulture.Country.SelectAll]
 *
 */

--Last modification on: 09/12/2022 19:23:19

SET DATEFORMAT DMY

SELECT
    [BasicCulture.Country].[CountryId] AS [CountryId],
    [BasicCulture.Country].[Name] AS [Name],
    [BasicCulture.Country].[GeographicalCoordinates] AS [GeographicalCoordinates],
    [BasicCulture.Country].[Code] AS [Code],
    [BasicCulture.Country].[PlanetId] AS [PlanetId],
    [BasicCulture.Country].[Active] AS [Active],
    [BasicCulture.Country].[UserCreationId] AS [UserCreationId],
    [BasicCulture.Country].[UserLastModificationId] AS [UserLastModificationId],
    [BasicCulture.Country].[DateTimeCreation] AS [DateTimeCreation],
    [BasicCulture.Country].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [BasicCulture.Country]
ORDER BY 
    [BasicCulture.Country].[CountryId]