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
  { 
    name: "Learn", 
    url: "Learn",
    subItems: [
      { name: "How to establish a Network State?", url: "learn/learn-how-to-establish-a-network-state" }
    ]
  },
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
                <React.Fragment key={page.url}>
                  {page.subItems ? (
                    <>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography variant="h3">{page.name}</Typography>
                      </MenuItem>
                      {page.subItems.map((subItem) => (
                        <Link
                          key={subItem.url}
                          href={`/${subItem.url.toLowerCase()}`}
                          passHref
                        >
                          <MenuItem 
                            onClick={handleCloseNavMenu} 
                            sx={{ 
                              pl: 4,
                              '& .MuiTypography-root': {
                                color: 'black',
                                fontSize: '0.9em',
                              }
                            }}
                          >
                            <Typography variant="h4">
                              {subItem.name}
                            </Typography>
                          </MenuItem>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      key={page.url}
                      href={`/${page.url.toLowerCase()}`}
                      passHref
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography variant="h3">{page.name}</Typography>
                      </MenuItem>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              ml: "auto",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <React.Fragment key={page.url}>
                {page.subItems ? (
                  <div className="relative group">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ 
                        my: 2, 
                        color: "white", 
                        display: "block",
                        px: { md: 1, lg: 2 }, // Adjust padding based on screen size
                      }}
                    >
                      <Typography variant="h3" sx={{ fontSize: { md: '1.2rem', lg: '1.5rem' } }}>
                        {page.name}
                      </Typography>
                    </Button>
                    <div className="absolute right-0 mt-2 w-48 md:w-56 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                      <div className="py-1 bg-white border-2 border-black rounded-md shadow-lg">
                        {page.subItems.map((subItem) => (
                          <Link key={subItem.url} href={`/${subItem.url.toLowerCase()}`} passHref>
                            <Button
                              onClick={handleCloseNavMenu}
                              sx={{
                                my: 1,
                                color: "black !important", // Force black color
                                display: "block",
                                width: "100%",
                                justifyContent: "flex-start",
                                textAlign: "left",
                                lineHeight: 1.2,
                                fontSize: "0.7rem",
                                padding: "6px 12px",
                                '&:hover': {
                                  backgroundColor: 'rgba(0, 0, 0, 0.04)', // Light grey on hover
                                },
                              }}
                            >
                              {subItem.name}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={page.url} href={`/${page.url.toLowerCase()}`} passHref>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ 
                        my: 2, 
                        color: "white", 
                        display: "block",
                        px: { md: 1, lg: 2 }, // Adjust padding based on screen size
                      }}
                    >
                      <Typography variant="h3" sx={{ fontSize: { md: '1.2rem', lg: '1.5rem' } }}>
                        {page.name}
                      </Typography>
                    </Button>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
