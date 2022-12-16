CREATE PROCEDURE [dbo].[FiyiStack.Blog.SelectAllPaged]
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
EXEC [dbo].[FiyiStack.Blog.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'BlogId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 16/12/2022 10:50:10

SET DATEFORMAT DMY
SET NOCOUNT ON

SELECT
    [FiyiStack.Blog].[BlogId] AS [BlogId],
    [FiyiStack.Blog].[Active] AS [Active],
    [FiyiStack.Blog].[DateTimeCreation] AS [DateTimeCreation],
    [FiyiStack.Blog].[DateTimeLastModification] AS [DateTimeLastModification],
    [FiyiStack.Blog].[UserCreationId] AS [UserCreationId],
    [FiyiStack.Blog].[UserLastModificationId] AS [UserLastModificationId],
    [FiyiStack.Blog].[Title] AS [Title],
    [FiyiStack.Blog].[Body] AS [Body],
    [FiyiStack.Blog].[BackgroundImage] AS [BackgroundImage]
FROM 
    [FiyiStack.Blog]
WHERE
    1=1
    AND (@QueryString = '' 
        OR ([FiyiStack.Blog].[BlogId] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.Blog].[Active] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.Blog].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.Blog].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.Blog].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.Blog].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.Blog].[Title] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.Blog].[Body] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.Blog].[BackgroundImage] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'BlogId' AND @SortToggler = 0) THEN [BlogId] END ASC,
    CASE WHEN (@SorterColumn = 'BlogId' AND @SortToggler = 1) THEN [BlogId] END DESC,
    CASE WHEN (@SorterColumn = 'Active' AND @SortToggler = 0) THEN [Active] END ASC,
    CASE WHEN (@SorterColumn = 'Active' AND @SortToggler = 1) THEN [Active] END DESC,
    CASE WHEN (@SorterColumn = 'DateTimeCreation' AND @SortToggler = 0) THEN [DateTimeCreation] END ASC,
    CASE WHEN (@SorterColumn = 'DateTimeCreation' AND @SortToggler = 1) THEN [DateTimeCreation] END DESC,
    CASE WHEN (@SorterColumn = 'DateTimeLastModification' AND @SortToggler = 0) THEN [DateTimeLastModification] END ASC,
    CASE WHEN (@SorterColumn = 'DateTimeLastModification' AND @SortToggler = 1) THEN [DateTimeLastModification] END DESC,
    CASE WHEN (@SorterColumn = 'UserCreationId' AND @SortToggler = 0) THEN [UserCreationId] END ASC,
    CASE WHEN (@SorterColumn = 'UserCreationId' AND @SortToggler = 1) THEN [UserCreationId] END DESC,
    CASE WHEN (@SorterColumn = 'UserLastModificationId' AND @SortToggler = 0) THEN [UserLastModificationId] END ASC,
    CASE WHEN (@SorterColumn = 'UserLastModificationId' AND @SortToggler = 1) THEN [UserLastModificationId] END DESC,
    CASE WHEN (@SorterColumn = 'Title' AND @SortToggler = 0) THEN [Title] END ASC,
    CASE WHEN (@SorterColumn = 'Title' AND @SortToggler = 1) THEN [Title] END DESC,
    CASE WHEN (@SorterColumn = 'Body' AND @SortToggler = 0) THEN [Body] END ASC,
    CASE WHEN (@SorterColumn = 'Body' AND @SortToggler = 1) THEN [Body] END DESC,
    CASE WHEN (@SorterColumn = 'BackgroundImage' AND @SortToggler = 0) THEN [BackgroundImage] END ASC,
    CASE WHEN (@SorterColumn = 'BackgroundImage' AND @SortToggler = 1) THEN [BackgroundImage] END DESC

OFFSET (@ActualPageNumber - 1) * @RowsPerPage ROWS
FETCH NEXT @RowsPerPage ROWS ONLY
SELECT @TotalRows = COUNT(*) FROM [FiyiStack.Blog]