USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 08/12/2022 10:43:00

CREATE TABLE [dbo].[CMSCore.User] (
    [UserId] [int] IDENTITY(1,1) NOT NULL,
    CONSTRAINT [PK_CMSCoreUser] PRIMARY KEY CLUSTERED ([UserId] ASC) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
ON [PRIMARY])