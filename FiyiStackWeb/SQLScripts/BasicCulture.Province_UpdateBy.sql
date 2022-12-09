CREATE PROCEDURE [dbo].[BasicCulture.Province.UpdateByProvinceId]
(
    @ProvinceId INT,
    @Name VARCHAR(500),
    @GeographicalCoordinates VARCHAR(200),
    @Code VARCHAR(100),
    @CountryId INT,
    @Active TINYINT,
    @UserCreationId INT,
    @UserLastModificationId INT,
    @DateTimeCreation DATETIME,
    @DateTimeLastModification DATETIME,

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
EXEC [dbo].[BasicCulture.Province.UpdateByProvinceId]
    @ProvinceId = 1,
    @RowsAffected = @RowsAffected OUTPUT
SELECT @RowsAffected AS N'@RowsAffected'
 *
 */

--Last modification on: 09/12/2022 19:23:15

UPDATE [BasicCulture.Province] SET
    [Name] = @Name,
    [GeographicalCoordinates] = @GeographicalCoordinates,
    [Code] = @Code,
    [CountryId] = @CountryId,
    [Active] = @Active,
    [UserCreationId] = @UserCreationId,
    [UserLastModificationId] = @UserLastModificationId,
    [DateTimeCreation] = @DateTimeCreation,
    [DateTimeLastModification] = @DateTimeLastModification
WHERE 
    1 = 1 
    AND [BasicCulture.Province].[ProvinceId] = @ProvinceId 

SELECT @RowsAffected = @@ROWCOUNT