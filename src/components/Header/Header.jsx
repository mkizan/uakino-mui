import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Toolbar from "@mui/material/Toolbar";
import { MenuButton } from "./Header.styled";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <MenuButton
              color="inherit"
              component={NavLink}
              to="/"
              startIcon={<HomeOutlinedIcon />}
            >
              Home
            </MenuButton>
            <MenuButton
              color="secondary"
              component={NavLink}
              to="/movies"
              startIcon={<MovieCreationOutlinedIcon />}
            >
              Movies
            </MenuButton>
            <MenuButton color="inherit">Login</MenuButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
