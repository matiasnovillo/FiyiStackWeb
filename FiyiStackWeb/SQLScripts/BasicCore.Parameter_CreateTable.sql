USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 08/12/2022 8:07:22

CREATE TABLE [dbo].[BasicCore.Parameter] (
    [ParameterId] [int] IDENTITY(1,1) NOT NULL,
    CONSTRAINT [PK_BasicCoreParameter] PRIMARY KEY CLUSTERED ([ParameterId] ASC) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
ON [PRIMARY])
ON[PRIMARY]