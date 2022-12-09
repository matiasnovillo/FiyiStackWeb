CREATE PROCEDURE [dbo].[BasicCulture.Planet.SelectAllPaged]
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
EXEC [dbo].[BasicCulture.Planet.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'PlanetId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 09/12/2022 19:23:24

SET DATEFORMAT DMY
SET NOCOUNT ON

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
    1=1
    AND (@QueryString = '' 
        OR ([BasicCulture.Planet].[PlanetId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Planet].[Name] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Planet].[Code] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Planet].[Active] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Planet].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Planet].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Planet].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([BasicCulture.Planet].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'PlanetId' AND @SortToggler = 0) THEN [PlanetId] END ASC,
    CASE WHEN (@SorterColumn = 'PlanetId' AND @SortToggler = 1) THEN [PlanetId] END DESC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 0) THEN [Name] END ASC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 1) THEN [Name] END DESC,
    CASE WHEN (@SorterColumn = 'Code' AND @SortToggler = 0) THEN [Code] END ASC,
    CASE WHEN (@SorterColumn = 'Code' AND @SortToggler = 1) THEN [Code] END DESC,
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
SELECT @TotalRows = COUNT(*) FROM [BasicCulture.Planet]