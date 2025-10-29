/* eslint-disable react/prop-types */
import React from "react";
import {
  alpha,
  Box,
  IconButton,
  InputBase,
  styled,
  Toolbar,
  useTheme,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? drawerWidth : 0,
  width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: open
      ? theme.transitions.duration.enteringScreen
      : theme.transitions.duration.leavingScreen,
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const theme = useTheme();
  return (
    <div>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box flexGrow={1} />
          <Stack direction="row" spacing={1}>
            {theme.palette.mode === "light" ? (
              <IconButton
                color="inherit"
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "light" ? "dark" : "light"
                  );
                  setMode((prevMode) => {
                    return prevMode === "light" ? "dark" : "light";
                  });
                }}
              >
                <LightModeOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton
                color="inherit"
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "light" ? "dark" : "light"
                  );
                  setMode((prevMode) => {
                    return prevMode === "light" ? "dark" : "light";
                  });
                }}
              >
                <DarkModeOutlinedIcon />
              </IconButton>
            )}

            <IconButton color="inherit" aria-label="add an alarm">
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="add to shopping cart">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="add to shopping cart">
              <PermIdentityOutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};
TopBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};
export default TopBar;
