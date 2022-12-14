CREATE PROCEDURE [dbo].[CMSCore.User.UpdateByUserId]
(
    @UserId INT,
    @FantasyName VARCHAR(200),
    @Email VARCHAR(320),
    @Password VARCHAR(8000),
    @ProfileImageURL VARCHAR(8000),
    @DateTimeBirth DATETIME,
    @VerificationToken VARCHAR(8000),
    @CookieToken VARCHAR(8000),
    @RoleId INT,
    @Active TINYINT,
    @UserCreationId INT,
    @UserLastModificationId INT,
    @DateTimeCreation DATETIME,
    @DateTimeLastModification DATETIME,
    @RegistrationToken VARCHAR(8000),

    @RowsAffected INT OUTPUT
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

/*
 * Execute this stored procedure with the next script as example
 *
DECLARE	@RowsAffected int
EXEC [dbo].[CMSCore.User.UpdateByUserId]
    @UserId = 1,
    @RowsAffected = @RowsAffected OUTPUT
SELECT @RowsAffected AS N'@RowsAffected'
 *
 */

--Last modification on: 14/12/2022 19:43:28

UPDATE [CMSCore.User] SET
    [FantasyName] = @FantasyName,
    [Email] = @Email,
    [Password] = @Password,
    [ProfileImageURL] = @ProfileImageURL,
    [DateTimeBirth] = @DateTimeBirth,
    [VerificationToken] = @VerificationToken,
    [CookieToken] = @CookieToken,
    [RoleId] = @RoleId,
    [Active] = @Active,
    [UserCreationId] = @UserCreationId,
    [UserLastModificationId] = @UserLastModificationId,
    [DateTimeCreation] = @DateTimeCreation,
    [DateTimeLastModification] = @DateTimeLastModification,
    [RegistrationToken] = @RegistrationToken
WHERE 
    1 = 1 
    AND [CMSCore.User].[UserId] = @UserId 

SELECT @RowsAffected = @@ROWCOUNT