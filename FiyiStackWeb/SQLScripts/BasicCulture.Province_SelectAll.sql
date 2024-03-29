CREATE PROCEDURE [dbo].[BasicCulture.Province.SelectAll]

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
EXEC [dbo].[BasicCulture.Province.SelectAll]
 *
 */

--Last modification on: 20/12/2022 20:14:59

SET DATEFORMAT DMY

SELECT
    [BasicCulture.Province].[ProvinceId],
    [BasicCulture.Province].[Name],
    [BasicCulture.Province].[GeographicalCoordinates],
    [BasicCulture.Province].[Code],
    [BasicCulture.Province].[CountryId],
    [BasicCulture.Province].[Active],
    [BasicCulture.Province].[UserCreationId],
    [BasicCulture.Province].[UserLastModificationId],
    [BasicCulture.Province].[DateTimeCreation],
    [BasicCulture.Province].[DateTimeLastModification]
FROM 
    [BasicCulture.Province]
    LEFT OUTER JOIN [CMSCore.User] AS [CMSCore.User.UserCreationId] ON [BasicCulture.Province].[UserCreationId] = [CMSCore.User.UserCreationId].[UserId]
	LEFT OUTER JOIN [CMSCore.User] AS [CMSCore.User.UserLastModificationId] ON [BasicCulture.Province].[UserLastModificationId] = [CMSCore.User.UserLastModificationId].[UserId]
ORDER BY 
    [BasicCulture.Province].[ProvinceId]