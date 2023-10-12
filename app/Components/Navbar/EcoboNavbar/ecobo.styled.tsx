"use client";
import { styled, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

export const StyledToolbar = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
  backgroundColor: '#D5E8D4',
   color: '#6A9153',
  padding: "0.5rem",
  position: "relative",
  "*": {
    textDecoration: "none",
    boxSizing: "border-box",
  },
  "*:visited": {},
}));

export const StyledTitle = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
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

export const Filler = styled(Box)(({ theme }:{theme:Theme}) => ({
  display: 'flex',
  flexGrow:1

}))


