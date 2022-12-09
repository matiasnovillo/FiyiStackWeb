USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 09/12/2022 19:23:30

ALTER TABLE [dbo].[Sex] ADD [SexId] INT IDENTITY(1,1) NOT NULL
ALTER TABLE [dbo].[Sex] ADD [Name] VARCHAR(500)NOT NULL
ALTER TABLE [dbo].[Sex] ADD [Active] TINYINT NOT NULL
ALTER TABLE [dbo].[Sex] ADD [UserCreationId] INT NOT NULL
ALTER TABLE [dbo].[Sex] ADD [UserLastModificationId] INT NOT NULL
ALTER TABLE [dbo].[Sex] ADD [DateTimeCreation] DATETIME NOT NULL
ALTER TABLE [dbo].[Sex] ADD [DateTimeLastModification] DATETIME NOT NULL
