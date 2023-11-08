"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import { ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";
import { Inter } from "next/font/google";
import DiamondTwoToneIcon from "@mui/icons-material/DiamondTwoTone";
import DiamondIcon from "@mui/icons-material/Diamond";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface NavbarProps {
  btncolor?: string;
}
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

// HAMBURGER ICON STYLING
const NavMenuIcon = styled(MenuIcon)(({ theme }) => ({
  position: "absolute",
  color: "#000000",
  right: "1rem",
  height: "1.9rem",
  width: "1.9rem",
  fontWeight: "bold",

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "inline-block",
  },
  "&:hover": {
    cursor: "pointer",
  },
}));

// MOBILE MENU
const StyledMobileMenu = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "max-content",
  gap: theme.spacing(0.5),

  backgroundColor: theme.palette.mode === "dark" ? "inherit" : "#fff",
  boxShadow: "20px",
  // color: theme.palette.mode === 'dark'? 'inherit' : '#000',
  // rowGap:'0.5rem', fontSize:'1.5rem',
  "&:visited": {
    color: "inherit",
    textTransform: "capitalize",
  },

  "&.mob-title-wrapper": {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "flex-start",
    textTransform: "capitalize",
  },

  ".mob-menu-link": {
    textTransform: "capitalize",
    justifyContent: "flex-start",
    fontWeight: "bold",
    fontFamily: "var(--font-inter)",
    rowGap: "0.5rem",
    color: theme.palette.mode === "dark" ? "inherit" : "#000",
  },
}));

//MOBILE MENU WRAPPER

//MOBILE MENU OPEN / CLOSE STYLING
const open = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  top: "100%",
  left: "0.15rem",
  width: { xs: "max-content", sm: "15rem" },
  height: "auto",
  zIndex: "99",
  transition: "left 0.5s ease",
};
const close = {
  display: "none",
  position: "absolute",
  top: "144px",
  left: "-100%",
};

// Desktop Menu Style
const DeskMenuWrapper = styled(Stack)<NavbarProps>(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },

  ".desk-menu-btn": {
    color: theme.palette.mode === "dark" ? "#919191" : "#000",
    fontFamily: "var(--font-inter)",
    fontSize: "1rem",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },

  ".btns": {
    color: "#fff",
    padding: "0.5rem 2rem",
    fontWeight: "bold",
    textTransform: "capitalize",
    borderRadius: "50px 50px 50px 50px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      fontSize: "12px",
    },
  },
}));

const NavBarWrapper = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#191919" : "#fff",
  color: theme.palette.mode === "dark" ? "inherit" : "#000",
  textTransform: "capitalize",
  "* , *:visited": {
    textTransform: "capitalize",
    boxSizing: "border-box",
  },
}));

export default function Flexnavbar({ btncolor }: NavbarProps) {
  console.log(btncolor);
  const [menu, showMenu] = React.useState<boolean>(false);
  const menuIconRef = React.useRef<SVGSVGElement | null>(null);

  React.useEffect(() => {
    document.addEventListener("click", closeMenuIfClickedOutside);
    window.addEventListener("keydown", handleEscapeKeyDown);
    return () => {
      document.removeEventListener("click", closeMenuIfClickedOutside);
      window.removeEventListener("keydown", handleEscapeKeyDown);
    };
  }, []);

  const closeMenuIfClickedOutside = (e: MouseEvent) => {
    if (
      menuIconRef.current &&
      !menuIconRef.current.contains(e.target as Node)
    ) {
      showMenu(false);
    }
  };
  const handleEscapeKeyDown = (e: KeyboardEvent) => {
    console.log(e.key);
    if (e.key === "Escape") {
      showMenu(false);
    }
  };

  return (
    <>
      <NavBarWrapper
        position="relative"
        elevation={0}
        variant="outlined"
        className="main-bar"

        //sx={{ display: 'none' }}
      >
        <Toolbar sx={{ position: "relative" }} className={inter.variable}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ flex: 1, marginLeft: { xs: "0.5rem" } }}
          >
            <DiamondIcon spacing={2} sx={{ color: `${btncolor}` }} />
            <Typography
              variant="h4"
              className="title"
              fontFamily="var(--font-inter)"
              color="inherit"
            >
              Title
            </Typography>
          </Stack>
          <NavMenuIcon
            ref={menuIconRef}
            onClick={() => showMenu(!menu)}
            className="base-mobile-menu"
            sx={{
              position: "absolute",
              top: "0",
              bottom: "0",
              right: { md: "0.5rem" },
              margin: "auto",
              color: "inherit",
            }}
          />
          <StyledMobileMenu sx={menu ? open : close} className="base-menu-list">
            <Paper>
              <Stack>
                <Button
                  className="mob-menu-link"
                  href="/"
                  onClick={() => showMenu(!menu)}
                >
                  Home
                </Button>
                <Button
                  className="mob-menu-link"
                  href="/Navbars"
                  onClick={() => showMenu(!menu)}
                >
                  Navbars
                </Button>
                <Button
                  className="mob-menu-link"
                  href="/TestHere"
                  onClick={() => showMenu(!menu)}
                >
                  Playground
                </Button>
                <Button
                  className="mob-menu-link"
                  href="/"
                  onClick={() => showMenu(!menu)}
                >
                  LandingPage
                </Button>
                <Button
                  className="mob-menu-link"
                  href="/Components/Review"
                  onClick={() => showMenu(!menu)}
                >
                  Testing
                </Button>
              </Stack>
            </Paper>
          </StyledMobileMenu>

          {/* Desktop */}
          <DeskMenuWrapper direction="row" flexGrow="1">
            <Button
              className="desk-menu-btn"
              href="/"
              endIcon={<ExpandMoreIcon />}
            >
              Home
            </Button>
            <Button
              className="desk-menu-btn"
              href="/Navbars"
              endIcon={<ExpandMoreIcon />}
            >
              Navbars
            </Button>
            <Button
              className="desk-menu-btn"
              href="/TestHere"
              endIcon={<ExpandMoreIcon />}
            >
              Playground
            </Button>
            <Button
              className="desk-menu-btn "
              href="/Components/Review"
              endIcon={<ExpandMoreIcon />}
            >
              Testing
            </Button>
          </DeskMenuWrapper>
          <DeskMenuWrapper direction="row">
            <Button className="desk-menu-btn" href="#">
              Pricing
            </Button>
            <Button
              id="btn"
              className="desk-menu-btn btns"
              href="#"
              variant="contained"
              sx={{ backgroundColor: `${btncolor}` }}
            >
              Sign In
            </Button>
          </DeskMenuWrapper>
        </Toolbar>
      </NavBarWrapper>
      {/* <Offset />   */}
    </>
  );
}
