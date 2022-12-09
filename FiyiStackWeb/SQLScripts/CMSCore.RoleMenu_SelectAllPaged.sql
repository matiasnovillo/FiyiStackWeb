CREATE PROCEDURE [dbo].[CMSCore.RoleMenu.SelectAllPaged]
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
EXEC [dbo].[CMSCore.RoleMenu.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'RoleMenuId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 09/12/2022 19:22:56

SET DATEFORMAT DMY
SET NOCOUNT ON

SELECT
    [CMSCore.RoleMenu].[RoleMenuId] AS [RoleMenuId],
    [CMSCore.RoleMenu].[RoleId] AS [RoleId],
    [CMSCore.RoleMenu].[MenuId] AS [MenuId],
    [CMSCore.RoleMenu].[Active] AS [Active],
    [CMSCore.RoleMenu].[UserCreationId] AS [UserCreationId],
    [CMSCore.RoleMenu].[UserLastModificationId] AS [UserLastModificationId],
    [CMSCore.RoleMenu].[DateTimeCreation] AS [DateTimeCreation],
    [CMSCore.RoleMenu].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [CMSCore.RoleMenu]
WHERE
    1=1
    AND (@QueryString = '' 
        OR ([CMSCore.RoleMenu].[RoleMenuId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.RoleMenu].[RoleId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.RoleMenu].[MenuId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.RoleMenu].[Active] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.RoleMenu].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.RoleMenu].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.RoleMenu].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.RoleMenu].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'RoleMenuId' AND @SortToggler = 0) THEN [RoleMenuId] END ASC,
    CASE WHEN (@SorterColumn = 'RoleMenuId' AND @SortToggler = 1) THEN [RoleMenuId] END DESC,
    CASE WHEN (@SorterColumn = 'RoleId' AND @SortToggler = 0) THEN [RoleId] END ASC,
    CASE WHEN (@SorterColumn = 'RoleId' AND @SortToggler = 1) THEN [RoleId] END DESC,
    CASE WHEN (@SorterColumn = 'MenuId' AND @SortToggler = 0) THEN [MenuId] END ASC,
    CASE WHEN (@SorterColumn = 'MenuId' AND @SortToggler = 1) THEN [MenuId] END DESC,
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
SELECT @TotalRows = COUNT(*) FROM [CMSCore.RoleMenu]