CREATE PROCEDURE [dbo].[BasicCore.Parameter.SelectAllPaged]
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
EXEC [dbo].[BasicCore.Parameter.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'ParameterId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 08/12/2022 8:07:23

SET DATEFORMAT DMY
SET NOCOUNT ON

SELECT
    [BasicCore.Parameter].[ParameterId] AS [ParameterId],
    [BasicCore.Parameter].[Name] AS [Name],
    [BasicCore.Parameter].[Value] AS [Value],
    [BasicCore.Parameter].[IsPrivate] AS [IsPrivate],
    [BasicCore.Parameter].[Active] AS [Active],
    [BasicCore.Parameter].[UserCreationId] AS [UserCreationId],
    [BasicCore.Parameter].[UserLastModificationId] AS [UserLastModificationId],
    [BasicCore.Parameter].[DateTimeCreation] AS [DateTimeCreation],
    [BasicCore.Parameter].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [BasicCore.Parameter]
WHERE
    1=1
    AND (@QueryString = '' 
        OR ([BasicCore.Parameter].[ParameterId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Parameter].[Name] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Parameter].[Value] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Parameter].[IsPrivate] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Parameter].[Active] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Parameter].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Parameter].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Parameter].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Parameter].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'ParameterId' AND @SortToggler = 0) THEN [ParameterId] END ASC,
    CASE WHEN (@SorterColumn = 'ParameterId' AND @SortToggler = 1) THEN [ParameterId] END DESC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 0) THEN [Name] END ASC,
    CASE WHEN (@SorterColumn = 'Name' AND @SortToggler = 1) THEN [Name] END DESC,
    CASE WHEN (@SorterColumn = 'Value' AND @SortToggler = 0) THEN [Value] END ASC,
    CASE WHEN (@SorterColumn = 'Value' AND @SortToggler = 1) THEN [Value] END DESC,
    CASE WHEN (@SorterColumn = 'IsPrivate' AND @SortToggler = 0) THEN [IsPrivate] END ASC,
    CASE WHEN (@SorterColumn = 'IsPrivate' AND @SortToggler = 1) THEN [IsPrivate] END DESC,
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
SELECT @TotalRows = COUNT(*) FROM [BasicCore.Parameter]