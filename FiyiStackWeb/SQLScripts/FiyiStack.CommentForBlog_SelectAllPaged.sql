CREATE PROCEDURE [dbo].[FiyiStack.CommentForBlog.SelectAllPaged]
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
EXEC [dbo].[FiyiStack.CommentForBlog.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'CommentForBlogId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 16/12/2022 10:50:17

SET DATEFORMAT DMY
SET NOCOUNT ON

SELECT
    [FiyiStack.CommentForBlog].[CommentForBlogId] AS [CommentForBlogId],
    [FiyiStack.CommentForBlog].[Active] AS [Active],
    [FiyiStack.CommentForBlog].[DateTimeCreation] AS [DateTimeCreation],
    [FiyiStack.CommentForBlog].[DateTimeLastModification] AS [DateTimeLastModification],
    [FiyiStack.CommentForBlog].[UserCreationId] AS [UserCreationId],
    [FiyiStack.CommentForBlog].[UserLastModificationId] AS [UserLastModificationId],
    [FiyiStack.CommentForBlog].[Comment] AS [Comment],
    [FiyiStack.CommentForBlog].[BlogId] AS [BlogId]
FROM 
    [FiyiStack.CommentForBlog]
WHERE
    1=1
    AND (@QueryString = '' 
        OR ([FiyiStack.CommentForBlog].[CommentForBlogId] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.CommentForBlog].[Active] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.CommentForBlog].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.CommentForBlog].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.CommentForBlog].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.CommentForBlog].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.CommentForBlog].[Comment] LIKE  '%' + @QueryString + '%')
        OR ([FiyiStack.CommentForBlog].[BlogId] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'CommentForBlogId' AND @SortToggler = 0) THEN [CommentForBlogId] END ASC,
    CASE WHEN (@SorterColumn = 'CommentForBlogId' AND @SortToggler = 1) THEN [CommentForBlogId] END DESC,
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
    CASE WHEN (@SorterColumn = 'Comment' AND @SortToggler = 0) THEN [Comment] END ASC,
    CASE WHEN (@SorterColumn = 'Comment' AND @SortToggler = 1) THEN [Comment] END DESC,
    CASE WHEN (@SorterColumn = 'BlogId' AND @SortToggler = 0) THEN [BlogId] END ASC,
    CASE WHEN (@SorterColumn = 'BlogId' AND @SortToggler = 1) THEN [BlogId] END DESC

OFFSET (@ActualPageNumber - 1) * @RowsPerPage ROWS
FETCH NEXT @RowsPerPage ROWS ONLY
SELECT @TotalRows = COUNT(*) FROM [FiyiStack.CommentForBlog]