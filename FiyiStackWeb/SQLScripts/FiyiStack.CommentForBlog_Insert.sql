CREATE PROCEDURE [dbo].[FiyiStack.CommentForBlog.Insert] 
(
    @Active TINYINT,
    @DateTimeCreation DATETIME,
    @DateTimeLastModification DATETIME,
    @UserCreationId INT,
    @UserLastModificationId INT,
    @Comment VARCHAR(8000),
    @BlogId INT,

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
EXEC [dbo].[FiyiStack.CommentForBlog.Insert]

    @Active = 1,
    @DateTimeCreation = N'01/01/1753 0:00:00.001',
    @DateTimeLastModification = N'01/01/1753 0:00:00.001',
    @UserCreationId = 1,
    @UserLastModificationId = 1,
    @Comment = N'PutComment',
     @BlogId = 1,

@NewEnteredId = @NewEnteredId OUTPUT

SELECT @NewEnteredId AS N'@NewEnteredId'
 *
 */

--Last modification on: 16/12/2022 10:50:16

INSERT INTO [FiyiStack.CommentForBlog]
(
    [Active],
    [DateTimeCreation],
    [DateTimeLastModification],
    [UserCreationId],
    [UserLastModificationId],
    [Comment],
    [BlogId]
)
VALUES
(
    @Active,
    @DateTimeCreation,
    @DateTimeLastModification,
    @UserCreationId,
    @UserLastModificationId,
    @Comment,
    @BlogId
)

SELECT @NewEnteredId = @@IDENTITY