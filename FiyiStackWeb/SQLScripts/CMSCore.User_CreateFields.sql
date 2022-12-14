USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 14/12/2022 19:43:28

ALTER TABLE [dbo].[User] ADD [UserId] INT IDENTITY(1,1) NOT NULL
ALTER TABLE [dbo].[User] ADD [FantasyName] VARCHAR(200)NOT NULL
ALTER TABLE [dbo].[User] ADD [Email] VARCHAR(320)NOT NULL
ALTER TABLE [dbo].[User] ADD [Password] VARCHAR(8000)NOT NULL
ALTER TABLE [dbo].[User] ADD [ProfileImageURL] VARCHAR(8000)NOT NULL
ALTER TABLE [dbo].[User] ADD [DateTimeBirth] DATETIME NOT NULL
ALTER TABLE [dbo].[User] ADD [VerificationToken] VARCHAR(8000)NOT NULL
ALTER TABLE [dbo].[User] ADD [CookieToken] VARCHAR(8000)NOT NULL
ALTER TABLE [dbo].[User] ADD [RoleId] INT NOT NULL
ALTER TABLE [dbo].[User] ADD [Active] TINYINT NOT NULL
ALTER TABLE [dbo].[User] ADD [UserCreationId] INT NOT NULL
ALTER TABLE [dbo].[User] ADD [UserLastModificationId] INT NOT NULL
ALTER TABLE [dbo].[User] ADD [DateTimeCreation] DATETIME NOT NULL
ALTER TABLE [dbo].[User] ADD [DateTimeLastModification] DATETIME NOT NULL
ALTER TABLE [dbo].[User] ADD [RegistrationToken] VARCHAR(8000)NOT NULL
