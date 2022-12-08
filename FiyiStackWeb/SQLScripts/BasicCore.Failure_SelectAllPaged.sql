CREATE PROCEDURE [dbo].[BasicCore.Failure.SelectAllPaged]
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
EXEC [dbo].[BasicCore.Failure.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'FailureId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 08/12/2022 7:45:13

SET DATEFORMAT DMY
SET NOCOUNT ON

SELECT
    [BasicCore.Failure].[FailureId] AS [FailureId],
    [BasicCore.Failure].[HTTPCode] AS [HTTPCode],
    [BasicCore.Failure].[EmergencyLevel] AS [EmergencyLevel],
    [BasicCore.Failure].[Message] AS [Message],
    [BasicCore.Failure].[StackTrace] AS [StackTrace],
    [BasicCore.Failure].[Source] AS [Source],
    [BasicCore.Failure].[Comment] AS [Comment],
    [BasicCore.Failure].[Active] AS [Active],
    [BasicCore.Failure].[UserCreationId] AS [UserCreationId],
    [BasicCore.Failure].[UserLastModificationId] AS [UserLastModificationId],
    [BasicCore.Failure].[DateTimeCreation] AS [DateTimeCreation],
    [BasicCore.Failure].[DateTimeLastModification] AS [DateTimeLastModification]
FROM 
    [BasicCore.Failure]
WHERE
    1=1
    AND (@QueryString = '' 
        OR ([BasicCore.Failure].[FailureId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[HTTPCode] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[EmergencyLevel] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[Message] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[StackTrace] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[Source] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[Comment] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[Active] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([BasicCore.Failure].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'FailureId' AND @SortToggler = 0) THEN [FailureId] END ASC,
    CASE WHEN (@SorterColumn = 'FailureId' AND @SortToggler = 1) THEN [FailureId] END DESC,
    CASE WHEN (@SorterColumn = 'HTTPCode' AND @SortToggler = 0) THEN [HTTPCode] END ASC,
    CASE WHEN (@SorterColumn = 'HTTPCode' AND @SortToggler = 1) THEN [HTTPCode] END DESC,
    CASE WHEN (@SorterColumn = 'EmergencyLevel' AND @SortToggler = 0) THEN [EmergencyLevel] END ASC,
    CASE WHEN (@SorterColumn = 'EmergencyLevel' AND @SortToggler = 1) THEN [EmergencyLevel] END DESC,
    CASE WHEN (@SorterColumn = 'Message' AND @SortToggler = 0) THEN [Message] END ASC,
    CASE WHEN (@SorterColumn = 'Message' AND @SortToggler = 1) THEN [Message] END DESC,
    CASE WHEN (@SorterColumn = 'StackTrace' AND @SortToggler = 0) THEN [StackTrace] END ASC,
    CASE WHEN (@SorterColumn = 'StackTrace' AND @SortToggler = 1) THEN [StackTrace] END DESC,
    CASE WHEN (@SorterColumn = 'Source' AND @SortToggler = 0) THEN [Source] END ASC,
    CASE WHEN (@SorterColumn = 'Source' AND @SortToggler = 1) THEN [Source] END DESC,
    CASE WHEN (@SorterColumn = 'Comment' AND @SortToggler = 0) THEN [Comment] END ASC,
    CASE WHEN (@SorterColumn = 'Comment' AND @SortToggler = 1) THEN [Comment] END DESC,
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
SELECT @TotalRows = COUNT(*) FROM [BasicCore.Failure]