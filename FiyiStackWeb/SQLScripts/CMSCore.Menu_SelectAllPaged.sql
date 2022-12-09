CREATE PROCEDURE [dbo].[CMSCore.Menu.SelectAllPaged]
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
EXEC [dbo].[CMSCore.Menu.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'MenuId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 09/12/2022 19:23:03

SET DATEFORMAT DMY
SET NOCOUNT ON

SELECT
    [CMSCore.Menu].[MenuId] AS [MenuId],
    [CMSCore.Menu].[Name] AS [Name],
    [CMSCore.Menu].[MenuFatherId] AS [MenuFatherId],
    [CMSCore.Menu].[Order] AS [Order],
    [CMSCore.Menu].[URLPath] AS [URLPath],
    [CMSCore.Menu].[IconURLPath] AS [IconURLPath],
    [CMSCore.Menu].[Active] AS [Active],
    [CMSCore.Menu].[UserCreationId] AS [UserCreationId],
    [CMSCore.Menu].[UserLastModificationId] AS [UserLastModificationId],
    [CMSCore.Menu].[DateTimeCreation] AS [DateTimeCreation],
    [CMSCore.Menu].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [CMSCore.Menu]
WHERE
    1=1
    AND (@QueryString = '' 
        OR ([CMSCore.Menu].[MenuId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Menu].[Name] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Menu].[MenuFatherId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Menu].[Order] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Menu].[URLPath] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Menu].[IconURLPath] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Menu].[Active] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Menu].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Menu].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Menu].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Menu].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'MenuId' AND @SortToggler = 0) THEN [MenuId] END ASC,
    CASE WHEN (@SorterColumn = 'MenuId' AND @SortToggler = 1) THEN [MenuId] END DESC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 0) THEN [Name] END ASC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 1) THEN [Name] END DESC,
    CASE WHEN (@SorterColumn = 'MenuFatherId' AND @SortToggler = 0) THEN [MenuFatherId] END ASC,
    CASE WHEN (@SorterColumn = 'MenuFatherId' AND @SortToggler = 1) THEN [MenuFatherId] END DESC,
    CASE WHEN (@SorterColumn = 'Order' AND @SortToggler = 0) THEN [Order] END ASC,
    CASE WHEN (@SorterColumn = 'Order' AND @SortToggler = 1) THEN [Order] END DESC,
    CASE WHEN (@SorterColumn = 'URLPath' AND @SortToggler = 0) THEN [URLPath] END ASC,
    CASE WHEN (@SorterColumn = 'URLPath' AND @SortToggler = 1) THEN [URLPath] END DESC,
    CASE WHEN (@SorterColumn = 'IconURLPath' AND @SortToggler = 0) THEN [IconURLPath] END ASC,
    CASE WHEN (@SorterColumn = 'IconURLPath' AND @SortToggler = 1) THEN [IconURLPath] END DESC,
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
SELECT @TotalRows = COUNT(*) FROM [CMSCore.Menu]