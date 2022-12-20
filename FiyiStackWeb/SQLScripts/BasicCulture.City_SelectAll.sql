CREATE PROCEDURE [dbo].[BasicCulture.City.SelectAll]

AS

/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 * 
 * Coded by fiyistack.com
 * Copyright © 2022
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 */

/*
 * Execute this stored procedure with the next script as example
 *
EXEC [dbo].[BasicCulture.City.SelectAll]
 *
 */

--Last modification on: 20/12/2022 18:25:58

SET DATEFORMAT DMY

SELECT
    [BasicCulture.City].[CityId],
    [BasicCulture.City].[Name],
    [BasicCulture.City].[GeographicalCoordinates],
    [BasicCulture.City].[Code],
    [BasicCulture.City].[ProvinceId],
    [BasicCulture.City].[Active],
    [BasicCulture.City].[UserCreationId],
    [BasicCulture.City].[UserLastModificationId],
    [BasicCulture.City].[DateTimeCreation],
    [BasicCulture.City].[DateTimeLastModification]
FROM 
    [BasicCulture.City]
    LEFT OUTER JOIN [CMSCore.User] AS [CMSCore.User.UserCreationId] ON [BasicCulture.City].[UserCreationId] = [CMSCore.User.UserCreationId].[UserId]
	LEFT OUTER JOIN [CMSCore.User] AS [CMSCore.User.UserLastModificationId] ON [BasicCulture.City].[UserLastModificationId] = [CMSCore.User.UserLastModificationId].[UserId]
ORDER BY 
    [BasicCulture.City].[CityId]