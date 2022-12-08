USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 08/12/2022 8:07:23

ALTER TABLE [dbo].[Parameter] ADD [ParameterId] INT IDENTITY(1,1) NOT NULL
ALTER TABLE [dbo].[Parameter] ADD [Name] VARCHAR(200)NOT NULL
ALTER TABLE [dbo].[Parameter] ADD [Value] VARCHAR(8000)NOT NULL
ALTER TABLE [dbo].[Parameter] ADD [IsPrivate] TINYINT NOT NULL
ALTER TABLE [dbo].[Parameter] ADD [Active] TINYINT NOT NULL
ALTER TABLE [dbo].[Parameter] ADD [UserCreationId] INT NOT NULL
ALTER TABLE [dbo].[Parameter] ADD [UserLastModificationId] INT NOT NULL
ALTER TABLE [dbo].[Parameter] ADD [DateTimeCreation] DATETIME NOT NULL
ALTER TABLE [dbo].[Parameter] ADD [DateTimeLastModification] DATETIME NOT NULL
