USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 09/12/2022 19:23:11

ALTER TABLE [dbo].[City] ADD [CityId] INT IDENTITY(1,1) NOT NULL
ALTER TABLE [dbo].[City] ADD [Name] VARCHAR(500)NOT NULL
ALTER TABLE [dbo].[City] ADD [GeographicalCoordinates] VARCHAR(200)NOT NULL
ALTER TABLE [dbo].[City] ADD [Code] VARCHAR(100)NOT NULL
ALTER TABLE [dbo].[City] ADD [ProvinceId] INT NOT NULL
ALTER TABLE [dbo].[City] ADD [Active] TINYINT NOT NULL
ALTER TABLE [dbo].[City] ADD [UserCreationId] INT NOT NULL
ALTER TABLE [dbo].[City] ADD [UserLastModificationId] INT NOT NULL
ALTER TABLE [dbo].[City] ADD [DateTimeCreation] DATETIME NOT NULL
ALTER TABLE [dbo].[City] ADD [DateTimeLastModification] DATETIME NOT NULL
