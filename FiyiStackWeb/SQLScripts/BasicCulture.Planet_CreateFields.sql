USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 09/12/2022 19:23:24

ALTER TABLE [dbo].[Planet] ADD [PlanetId] INT IDENTITY(1,1) NOT NULL
ALTER TABLE [dbo].[Planet] ADD [Name] VARCHAR(500)NOT NULL
ALTER TABLE [dbo].[Planet] ADD [Code] VARCHAR(100)NOT NULL
ALTER TABLE [dbo].[Planet] ADD [Active] TINYINT NOT NULL
ALTER TABLE [dbo].[Planet] ADD [UserCreationId] INT NOT NULL
ALTER TABLE [dbo].[Planet] ADD [UserLastModificationId] INT NOT NULL
ALTER TABLE [dbo].[Planet] ADD [DateTimeCreation] DATETIME NOT NULL
ALTER TABLE [dbo].[Planet] ADD [DateTimeLastModification] DATETIME NOT NULL
