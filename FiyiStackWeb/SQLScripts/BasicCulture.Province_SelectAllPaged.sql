CREATE PROCEDURE [dbo].[BasicCulture.Province.SelectAllPaged]
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
EXEC [dbo].[BasicCulture.Province.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'ProvinceId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 09/12/2022 19:23:16

SET DATEFORMAT DMY
SET NOCOUNT ON

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
WHERE
    1=1
    AND (@QueryString = '' 
        OR ([BasicCulture.Province].[ProvinceId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Province].[Name] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Province].[GeographicalCoordinates] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Province].[Code] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Province].[CountryId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Province].[Active] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Province].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Province].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Province].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Province].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'ProvinceId' AND @SortToggler = 0) THEN [ProvinceId] END ASC,
    CASE WHEN (@SorterColumn = 'ProvinceId' AND @SortToggler = 1) THEN [ProvinceId] END DESC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 0) THEN [Name] END ASC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 1) THEN [Name] END DESC,
    CASE WHEN (@SorterColumn = 'GeographicalCoordinates' AND @SortToggler = 0) THEN [GeographicalCoordinates] END ASC,
    CASE WHEN (@SorterColumn = 'GeographicalCoordinates' AND @SortToggler = 1) THEN [GeographicalCoordinates] END DESC,
    CASE WHEN (@SorterColumn = 'Code' AND @SortToggler = 0) THEN [Code] END ASC,
    CASE WHEN (@SorterColumn = 'Code' AND @SortToggler = 1) THEN [Code] END DESC,
    CASE WHEN (@SorterColumn = 'CountryId' AND @SortToggler = 0) THEN [CountryId] END ASC,
    CASE WHEN (@SorterColumn = 'CountryId' AND @SortToggler = 1) THEN [CountryId] END DESC,
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
SELECT @TotalRows = COUNT(*) FROM [BasicCulture.Province]