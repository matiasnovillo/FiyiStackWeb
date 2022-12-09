USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 09/12/2022 19:22:56

ALTER TABLE [dbo].[RoleMenu] ADD [RoleMenuId] INT IDENTITY(1,1) NOT NULL
ALTER TABLE [dbo].[RoleMenu] ADD [RoleId] INT NOT NULL
ALTER TABLE [dbo].[RoleMenu] ADD [MenuId] INT NOT NULL
ALTER TABLE [dbo].[RoleMenu] ADD [Active] TINYINT NOT NULL
ALTER TABLE [dbo].[RoleMenu] ADD [UserCreationId] INT NOT NULL
ALTER TABLE [dbo].[RoleMenu] ADD [UserLastModificationId] INT NOT NULL
ALTER TABLE [dbo].[RoleMenu] ADD [DateTimeCreation] DATETIME NOT NULL
ALTER TABLE [dbo].[RoleMenu] ADD [DateTimeLastModification] DATETIME NOT NULL
