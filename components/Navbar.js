import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const pages = [
  { name: "Network States", url: "Network-states" },
  { name: "Roadmap", url: "Roadmap" },
  { name: "DAO", url: "DAO" },
  { name: "Token", url: "Token" },
  { name: "Learn", url: "Learn" },
  { name: "Contact", url: "Contact" },
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.sand.main, boxShadow: "none" }}
    >
      <Container maxWidth="L" sx={{ paddingX: { xs: "default", md: 0 } }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: theme.palette.black.main,
              padding: 3,
            }}
          >
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h2"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: {md: "flex" },
                color: theme.palette.white.main,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              <Link href="/">The Incognita</Link>
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.palette.black.main }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                width: '100%', // Full width for better mobile usabili
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.url}
                  href={`/${page.url.toLowerCase()}`}
                  passHref
                >
                    <Button
                    variant="h3"
                    onClick={handleCloseNavMenu}
                    sx={{ display: "block" }} // Ensure each button is full width
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              ml: "auto",
            }}
          >
            {pages.map((page) => (
              <Link key={page.url} href={`/${page.url.toLowerCase()}`} passHref>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Typography variant="h3">{page.name}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
