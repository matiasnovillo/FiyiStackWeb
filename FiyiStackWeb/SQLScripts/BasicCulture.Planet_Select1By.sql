CREATE PROCEDURE [dbo].[BasicCulture.Planet.Select1ByPlanetId]
(
    @PlanetId INT
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
EXEC [dbo].[Planet.Select1ByPlanetId]
    @PlanetId = 1
 *
 */

--Last modification on: 09/12/2022 19:23:24

SET DATEFORMAT DMY

SELECT
    [BasicCulture.Planet].[PlanetId] AS [PlanetId],
    [BasicCulture.Planet].[Name] AS [Name],
    [BasicCulture.Planet].[Code] AS [Code],
    [BasicCulture.Planet].[Active] AS [Active],
    [BasicCulture.Planet].[UserCreationId] AS [UserCreationId],
    [BasicCulture.Planet].[UserLastModificationId] AS [UserLastModificationId],
    [BasicCulture.Planet].[DateTimeCreation] AS [DateTimeCreation],
    [BasicCulture.Planet].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [BasicCulture.Planet]
WHERE 
    1 = 1
    AND [BasicCulture.Planet].[PlanetId] = @PlanetId
ORDER BY 
    [BasicCulture.Planet].[PlanetId]