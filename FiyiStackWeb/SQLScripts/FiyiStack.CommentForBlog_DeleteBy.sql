CREATE PROCEDURE [dbo].[FiyiStack.CommentForBlog.DeleteByCommentForBlogId]
(
    @CommentForBlogId INT,
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
DECLARE	@RowsAffected INT
EXEC [dbo].[FiyiStack.CommentForBlog.DeleteByCommentForBlogId]
    @CommentForBlogId = 1,
    @RowsAffected = @RowsAffected OUTPUT
SELECT @RowsAffected AS N'@RowsAffected'
 *
 */

--Last modification on: 16/12/2022 10:50:16

DELETE FROM 
    [FiyiStack.CommentForBlog]
WHERE 
    1 = 1
    AND [FiyiStack.CommentForBlog].[CommentForBlogId] = @CommentForBlogId

SELECT @RowsAffected = @@ROWCOUNT