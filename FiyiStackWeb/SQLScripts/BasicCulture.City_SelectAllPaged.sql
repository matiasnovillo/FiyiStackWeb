CREATE PROCEDURE [dbo].[BasicCulture.City.SelectAllPaged]
(
    @QueryString VARCHAR(100),
    @ActualPageNumber INT,
    @RowsPerPage INT,
    @SorterColumn VARCHAR(100),
    @SortToggler TINYINT,
    @TotalRows INT OUTPUT
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

/*Execute this stored procedure with the next script as example

DECLARE	@TotalRows int
EXEC [dbo].[BasicCulture.City.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'CityId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 09/12/2022 19:23:11

SET DATEFORMAT DMY
SET NOCOUNT ON

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
WHERE
    1=1
    AND (@QueryString = '' 
        OR ([BasicCulture.City].[CityId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.City].[Name] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.City].[GeographicalCoordinates] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.City].[Code] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.City].[ProvinceId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.City].[Active] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.City].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.City].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.City].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.City].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'CityId' AND @SortToggler = 0) THEN [CityId] END ASC,
    CASE WHEN (@SorterColumn = 'CityId' AND @SortToggler = 1) THEN [CityId] END DESC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 0) THEN [Name] END ASC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 1) THEN [Name] END DESC,
    CASE WHEN (@SorterColumn = 'GeographicalCoordinates' AND @SortToggler = 0) THEN [GeographicalCoordinates] END ASC,
    CASE WHEN (@SorterColumn = 'GeographicalCoordinates' AND @SortToggler = 1) THEN [GeographicalCoordinates] END DESC,
    CASE WHEN (@SorterColumn = 'Code' AND @SortToggler = 0) THEN [Code] END ASC,
    CASE WHEN (@SorterColumn = 'Code' AND @SortToggler = 1) THEN [Code] END DESC,
    CASE WHEN (@SorterColumn = 'ProvinceId' AND @SortToggler = 0) THEN [ProvinceId] END ASC,
    CASE WHEN (@SorterColumn = 'ProvinceId' AND @SortToggler = 1) THEN [ProvinceId] END DESC,
    CASE WHEN (@SorterColumn = 'Active' AND @SortToggler = 0) THEN [Active] END ASC,
    CASE WHEN (@SorterColumn = 'Active' AND @SortToggler = 1) THEN [Active] END DESC,
    CASE WHEN (@SorterColumn = 'UserCreationId' AND @SortToggler = 0) THEN [UserCreationId] END ASC,
    CASE WHEN (@SorterColumn = 'UserCreationId' AND @SortToggler = 1) THEN [UserCreationId] END DESC,
    CASE WHEN (@SorterColumn = 'UserLastModificationId' AND @SortToggler = 0) THEN [UserLastModificationId] END ASC,
    CASE WHEN (@SorterColumn = 'UserLastModificationId' AND @SortToggler = 1) THEN [UserLastModificationId] END DESC,
    CASE WHEN (@SorterColumn = 'DateTimeCreation' AND @SortToggler = 0) THEN [DateTimeCreation] END ASC,
    CASE WHEN (@SorterColumn = 'DateTimeCreation' AND @SortToggler = 1) THEN [DateTimeCreation] END DESC,
    CASE WHEN (@SorterColumn = 'DateTimeLastModification' AND @SortToggler = 0) THEN [DateTimeLastModification] END ASC,
    CASE WHEN (@SorterColumn = 'DateTimeLastModification' AND @SortToggler = 1) THEN [DateTimeLastModification] END DESC

OFFSET (@ActualPageNumber - 1) * @RowsPerPage ROWS
FETCH NEXT @RowsPerPage ROWS ONLY
SELECT @TotalRows = COUNT(*) FROM [BasicCulture.City]