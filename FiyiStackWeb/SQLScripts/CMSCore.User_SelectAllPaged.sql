CREATE PROCEDURE [dbo].[CMSCore.User.SelectAllPaged]
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
EXEC [dbo].[CMSCore.User.SelectAllPaged]
    
    @QueryString = N'',
    @ActualPageNumber = 1,
    @RowsPerPage = 10,
    @SorterColumn = N'UserId',
    @SortToggler = 0,
    @TotalRows = @TotalRows OUTPUT

SELECT @TotalRows AS N'@TotalRows'
*/

--Last modification on: 15/12/2022 8:21:21

SET DATEFORMAT DMY
SET NOCOUNT ON

SELECT
    [CMSCore.User].[UserId] AS [UserId],
    [CMSCore.User].[FantasyName] AS [FantasyName],
    [CMSCore.User].[Email] AS [Email],
    [CMSCore.User].[Password] AS [Password],
    [CMSCore.User].[RoleId] AS [RoleId],
    [CMSCore.User].[Active] AS [Active],
    [CMSCore.User].[UserCreationId] AS [UserCreationId],
    [CMSCore.User].[UserLastModificationId] AS [UserLastModificationId],
    [CMSCore.User].[DateTimeCreation] AS [DateTimeCreation],
    [CMSCore.User].[DateTimeLastModification] AS [DateTimeLastModification],
    [CMSCore.User].[RegistrationToken] AS [RegistrationToken],
    [CMSCore.User].[NeedNewPassword] AS [NeedNewPassword]
FROM 
    [CMSCore.User]
WHERE
    1=1
    AND (@QueryString = '' 
        OR ([CMSCore.User].[UserId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[FantasyName] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[Email] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[Password] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[RoleId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[Active] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[UserCreationId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[UserLastModificationId] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[DateTimeCreation] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[DateTimeLastModification] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[RegistrationToken] LIKE  '%' + @QueryString + '%')
        OR ([CMSCore.User].[NeedNewPassword] LIKE  '%' + @QueryString + '%')

    )
ORDER BY 
    CASE WHEN (@SorterColumn = 'UserId' AND @SortToggler = 0) THEN [UserId] END ASC,
    CASE WHEN (@SorterColumn = 'UserId' AND @SortToggler = 1) THEN [UserId] END DESC,
    CASE WHEN (@SorterColumn = 'FantasyName' AND @SortToggler = 0) THEN [FantasyName] END ASC,
    CASE WHEN (@SorterColumn = 'FantasyName' AND @SortToggler = 1) THEN [FantasyName] END DESC,
    CASE WHEN (@SorterColumn = 'Email' AND @SortToggler = 0) THEN [Email] END ASC,
    CASE WHEN (@SorterColumn = 'Email' AND @SortToggler = 1) THEN [Email] END DESC,
    CASE WHEN (@SorterColumn = 'Password' AND @SortToggler = 0) THEN [Password] END ASC,
    CASE WHEN (@SorterColumn = 'Password' AND @SortToggler = 1) THEN [Password] END DESC,
    CASE WHEN (@SorterColumn = 'RoleId' AND @SortToggler = 0) THEN [RoleId] END ASC,
    CASE WHEN (@SorterColumn = 'RoleId' AND @SortToggler = 1) THEN [RoleId] END DESC,
    CASE WHEN (@SorterColumn = 'Active' AND @SortToggler = 0) THEN [Active] END ASC,
    CASE WHEN (@SorterColumn = 'Active' AND @SortToggler = 1) THEN [Active] END DESC,
    CASE WHEN (@SorterColumn = 'UserCreationId' AND @SortToggler = 0) THEN [UserCreationId] END ASC,
    CASE WHEN (@SorterColumn = 'UserCreationId' AND @SortToggler = 1) THEN [UserCreationId] END DESC,
    CASE WHEN (@SorterColumn = 'UserLastModificationId' AND @SortToggler = 0) THEN [UserLastModificationId] END ASC,
    CASE WHEN (@SorterColumn = 'UserLastModificationId' AND @SortToggler = 1) THEN [UserLastModificationId] END DESC,
    CASE WHEN (@SorterColumn = 'DateTimeCreation' AND @SortToggler = 0) THEN [DateTimeCreation] END ASC,
    CASE WHEN (@SorterColumn = 'DateTimeCreation' AND @SortToggler = 1) THEN [DateTimeCreation] END DESC,
    CASE WHEN (@SorterColumn = 'DateTimeLastModification' AND @SortToggler = 0) THEN [DateTimeLastModification] END ASC,
    CASE WHEN (@SorterColumn = 'DateTimeLastModification' AND @SortToggler = 1) THEN [DateTimeLastModification] END DESC,
    CASE WHEN (@SorterColumn = 'RegistrationToken' AND @SortToggler = 0) THEN [RegistrationToken] END ASC,
    CASE WHEN (@SorterColumn = 'RegistrationToken' AND @SortToggler = 1) THEN [RegistrationToken] END DESC,
    CASE WHEN (@SorterColumn = 'NeedNewPassword' AND @SortToggler = 0) THEN [NeedNewPassword] END ASC,
    CASE WHEN (@SorterColumn = 'NeedNewPassword' AND @SortToggler = 1) THEN [NeedNewPassword] END DESC

OFFSET (@ActualPageNumber - 1) * @RowsPerPage ROWS
FETCH NEXT @RowsPerPage ROWS ONLY
SELECT @TotalRows = COUNT(*) FROM [CMSCore.User]