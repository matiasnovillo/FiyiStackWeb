USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 09/12/2022 19:23:19

ALTER TABLE [dbo].[Country] ADD [CountryId] INT IDENTITY(1,1) NOT NULL
ALTER TABLE [dbo].[Country] ADD [Name] VARCHAR(500)NOT NULL
ALTER TABLE [dbo].[Country] ADD [GeographicalCoordinates] VARCHAR(200)NOT NULL
ALTER TABLE [dbo].[Country] ADD [Code] VARCHAR(100)NOT NULL
ALTER TABLE [dbo].[Country] ADD [PlanetId] INT NOT NULL
ALTER TABLE [dbo].[Country] ADD [Active] TINYINT NOT NULL
ALTER TABLE [dbo].[Country] ADD [UserCreationId] INT NOT NULL
ALTER TABLE [dbo].[Country] ADD [UserLastModificationId] INT NOT NULL
ALTER TABLE [dbo].[Country] ADD [DateTimeCreation] DATETIME NOT NULL
ALTER TABLE [dbo].[Country] ADD [DateTimeLastModification] DATETIME NOT NULL
