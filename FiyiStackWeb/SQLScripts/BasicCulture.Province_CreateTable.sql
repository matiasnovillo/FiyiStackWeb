USE [fiyistack_FiyiStackWeb]
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

--Last modification on: 09/12/2022 19:23:15

CREATE TABLE [dbo].[BasicCulture.Province] (
    [ProvinceId] [int] IDENTITY(1,1) NOT NULL,
    CONSTRAINT [PK_BasicCultureProvince] PRIMARY KEY CLUSTERED ([ProvinceId] ASC) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
ON [PRIMARY])
ON[PRIMARY]