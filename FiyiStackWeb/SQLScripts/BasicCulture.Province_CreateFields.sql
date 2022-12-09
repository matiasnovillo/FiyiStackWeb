USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 09/12/2022 19:23:16

ALTER TABLE [dbo].[Province] ADD [ProvinceId] INT IDENTITY(1,1) NOT NULL
ALTER TABLE [dbo].[Province] ADD [Name] VARCHAR(500)NOT NULL
ALTER TABLE [dbo].[Province] ADD [GeographicalCoordinates] VARCHAR(200)NOT NULL
ALTER TABLE [dbo].[Province] ADD [Code] VARCHAR(100)NOT NULL
ALTER TABLE [dbo].[Province] ADD [CountryId] INT NOT NULL
ALTER TABLE [dbo].[Province] ADD [Active] TINYINT NOT NULL
ALTER TABLE [dbo].[Province] ADD [UserCreationId] INT NOT NULL
ALTER TABLE [dbo].[Province] ADD [UserLastModificationId] INT NOT NULL
ALTER TABLE [dbo].[Province] ADD [DateTimeCreation] DATETIME NOT NULL
ALTER TABLE [dbo].[Province] ADD [DateTimeLastModification] DATETIME NOT NULL
