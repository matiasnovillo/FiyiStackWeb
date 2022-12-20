CREATE PROCEDURE [dbo].[BasicCulture.Country.DeleteByCountryId]
(
    @CountryId INT,
    @RowsAffected INT OUTPUT
)

AS

/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 * 
 * Coded by fiyistack.com
 * Copyright © 2022
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 */

/*
 * Execute this stored procedure with the next script as example
 *
DECLARE	@RowsAffected INT
EXEC [dbo].[BasicCulture.Country.DeleteByCountryId]
    @CountryId = 1,
    @RowsAffected = @RowsAffected OUTPUT
SELECT @RowsAffected AS N'@RowsAffected'
 *
 */

--Last modification on: 20/12/2022 20:09:00

DELETE FROM 
    [BasicCulture.Country]
WHERE 
    1 = 1
    AND [BasicCulture.Country].[CountryId] = @CountryId

SELECT @RowsAffected = @@ROWCOUNT