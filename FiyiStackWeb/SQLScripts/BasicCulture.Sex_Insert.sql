CREATE PROCEDURE [dbo].[BasicCulture.Sex.Insert] 
(
    @Name VARCHAR(500),
    @Active TINYINT,
    @UserCreationId INT,
    @UserLastModificationId INT,
    @DateTimeCreation DATETIME,
    @DateTimeLastModification DATETIME,

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
EXEC [dbo].[BasicCulture.Sex.Insert]

    @Name = N'PutName',
    @Active = 1,
    @UserCreationId = 1,
    @UserLastModificationId = 1,
    @DateTimeCreation = N'01/01/1753 0:00:00.001',
    @DateTimeLastModification = N'01/01/1753 0:00:00.001',

@NewEnteredId = @NewEnteredId OUTPUT

SELECT @NewEnteredId AS N'@NewEnteredId'
 *
 */

--Last modification on: 09/12/2022 19:23:30

INSERT INTO [BasicCulture.Sex]
(
    [Name],
    [Active],
    [UserCreationId],
    [UserLastModificationId],
    [DateTimeCreation],
    [DateTimeLastModification]
)
VALUES
(
    @Name,
    @Active,
    @UserCreationId,
    @UserLastModificationId,
    @DateTimeCreation,
    @DateTimeLastModification
)

SELECT @NewEnteredId = @@IDENTITY