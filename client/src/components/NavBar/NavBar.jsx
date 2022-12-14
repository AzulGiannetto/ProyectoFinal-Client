import * as React from "react";
import LocalAirportIcon from '@mui/icons-material/LocalAirport'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import PagesIcon from "@mui/icons-material/Pages";
// const pages = ['Home','Posts', 'Blog', 'Perfil'];
const pages = [
  {
    name: "Home",
    to: "/",
  },

  { name: "Feed", to: "/feed" },

  {
    name: "Post Me",
    to: "/post",
  },
  { name: "My Post", to: "/myPost" },
  {name:"Profile", to:"/Profile"}
  // { name: "profile", to: "/profile" },
];
// const settings = ["Profile", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogged, setIsLogged] = React.useState(
    JSON.parse(window.localStorage.getItem("Token"))
  );
  // const [profilePhoto, setProfilePhoto] = React.useState

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    setIsLogged(JSON.parse(window.localStorage.getItem("Token")));
  }, [location]);

  const handleSession = () => {
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("Email");
    navigate("/homepage");
  };

  const handleMyPost = () => {
    navigate("/mypost");
  };

  return (
    <AppBar style={{ backgroundColor: "#00796B" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              letterSpacing: ".3rem",
              color: "#ffffff",
              textDecoration: "none",
              m: "5px"
            }}
          >
            <LocalAirportIcon/>
            Soulgram
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography component={NavLink} to={page.to}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <LocalAirportIcon/>
            ;
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                component={NavLink}
                to={page.to}
                sx={{ my: 2, color: "#ffffff", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {isLogged ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}

                <MenuItem onClick={handleSession}>
                  <Logout fontSize="small" />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
