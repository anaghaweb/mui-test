"use client";
import { styled, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Menu from "@mui/icons-material/Menu";

export const StyledToolbar = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
  backgroundColor: "#FFFFFF",
  color: "#3399FF",
  padding: "0.5rem",
  position: "relative",
  "*": {
    textDecoration: "none",
    boxSizing: "border-box",
  },
  "*:visited": {},
}));

export const StyledBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexGrow: 0,
  color: "inherit",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

export const StyledTitle = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    flexGrow: 1,
    fontFamily: "inherit",
    fontWeight: 500,
    color: "inherit",
    textDecoration: "none",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      ...theme.typography.h6,
      padding: "0",
    },
  })
) as typeof Link;

export const LogoTitleWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexGrow: 0,
  justifyContent: "flex-start",
  alignItems: "center",
  color: "inherit",
  backgroundColor: "inherit",
}));

export const LogoWrapper = styled(IconButton)(
  ({ theme }: { theme: Theme }) => ({
    height: "5rem",
    width: "5rem",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      height: "3rem",
    },
  })
);
export const StyledMenu = styled(Menu)(({ theme }: { theme: Theme }) => ({
  display: "block",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

export const StyledIconButton = styled(IconButton)(
  ({ theme }: { theme: Theme }) => ({
    padding: "0.2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "0.5rem",
    },
  })
);
