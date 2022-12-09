USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 09/12/2022 19:22:49

ALTER TABLE [dbo].[Role] ADD [RoleId] INT IDENTITY(1,1) NOT NULL
ALTER TABLE [dbo].[Role] ADD [Name] VARCHAR(200)NOT NULL
ALTER TABLE [dbo].[Role] ADD [Active] TINYINT NOT NULL
ALTER TABLE [dbo].[Role] ADD [UserCreationId] INT NOT NULL
ALTER TABLE [dbo].[Role] ADD [UserLastModificationId] INT NOT NULL
ALTER TABLE [dbo].[Role] ADD [DateTimeCreation] DATETIME NOT NULL
ALTER TABLE [dbo].[Role] ADD [DateTimeLastModification] DATETIME NOT NULL
