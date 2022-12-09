CREATE PROCEDURE [dbo].[CMSCore.Role.SelectAllPaged]
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
EXEC [dbo].[CMSCore.Role.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'RoleId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 09/12/2022 19:22:49

SET DATEFORMAT DMY
SET NOCOUNT ON

SELECT
    [CMSCore.Role].[RoleId] AS [RoleId],
    [CMSCore.Role].[Name] AS [Name],
    [CMSCore.Role].[Active] AS [Active],
    [CMSCore.Role].[UserCreationId] AS [UserCreationId],
    [CMSCore.Role].[UserLastModificationId] AS [UserLastModificationId],
    [CMSCore.Role].[DateTimeCreation] AS [DateTimeCreation],
    [CMSCore.Role].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [CMSCore.Role]
WHERE
    1=1
    AND (@QueryString = '' 
        OR ([CMSCore.Role].[RoleId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Role].[Name] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Role].[Active] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Role].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Role].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Role].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.Role].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'RoleId' AND @SortToggler = 0) THEN [RoleId] END ASC,
    CASE WHEN (@SorterColumn = 'RoleId' AND @SortToggler = 1) THEN [RoleId] END DESC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 0) THEN [Name] END ASC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 1) THEN [Name] END DESC,
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
SELECT @TotalRows = COUNT(*) FROM [CMSCore.Role]