CREATE PROCEDURE [dbo].[CMSCore.User.Insert] 
(
    @FantasyName VARCHAR(200),
    @Email VARCHAR(320),
    @Password VARCHAR(8000),
    @RoleId INT,
    @Active TINYINT,
    @UserCreationId INT,
    @UserLastModificationId INT,
    @DateTimeCreation DATETIME,
    @DateTimeLastModification DATETIME,
    @RegistrationToken VARCHAR(8000),
    @NeedNewPassword TINYINT,

    @NewEnteredId INT OUTPUT
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
DECLARE	@NewEnteredId INT
EXEC [dbo].[CMSCore.User.Insert]

    @FantasyName = N'PutFantasyName',
    @Email = N'PutEmail',
    @Password = N'PutPassword',
     @RoleId = 1,
    @Active = 1,
    @UserCreationId = 1,
    @UserLastModificationId = 1,
    @DateTimeCreation = N'01/01/1753 0:00:00.001',
    @DateTimeLastModification = N'01/01/1753 0:00:00.001',
    @RegistrationToken = N'PutRegistrationToken',
    @NeedNewPassword = 1,

@NewEnteredId = @NewEnteredId OUTPUT

SELECT @NewEnteredId AS N'@NewEnteredId'
 *
 */

--Last modification on: 15/12/2022 8:21:21

INSERT INTO [CMSCore.User]
(
    [FantasyName],
    [Email],
    [Password],
    [RoleId],
    [Active],
    [UserCreationId],
    [UserLastModificationId],
    [DateTimeCreation],
    [DateTimeLastModification],
    [RegistrationToken],
    [NeedNewPassword]
)
VALUES
(
    @FantasyName,
    @Email,
    @Password,
    @RoleId,
    @Active,
    @UserCreationId,
    @UserLastModificationId,
    @DateTimeCreation,
    @DateTimeLastModification,
    @RegistrationToken,
    @NeedNewPassword
)

SELECT @NewEnteredId = @@IDENTITY