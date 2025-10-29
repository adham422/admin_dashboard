import React from "react";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import PropTypes from "prop-types";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  PeopleAltOutlined,
  PermIdentityOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
  WidthNormalOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 240;
let Array1 = [
  {
    id: 1,
    text: "Dashboard",
    icon: <HomeOutlined />,
    path: "/",
  },
  {
    id: 2,
    text: "Manage Team",
    icon: <PeopleAltOutlined />,
    path: "/team",
  },
  {
    id: 3,
    text: "Contacts Information",
    icon: <ContactsOutlined />,
    path: "/contacts",
  },
  {
    id: 4,
    text: "Invoices Balances",
    icon: <ReceiptOutlined />,
    path: "/invoices",
  },
];
let Array2 = [
  {
    id: 1,
    text: "Profile Form",
    icon: <PermIdentityOutlined />,
    path: "/profile",
  },
  {
    id: 2,
    text: "Calendar",
    icon: <CalendarTodayOutlined />,
    path: "/calendar",
  },
  {
    id: 3,
    text: "FAQ Page",
    icon: <HelpOutlineOutlined />,
    path: "/faq",
  },
];
let Array3 = [
  {
    id: 1,
    text: "Bar Chart",
    icon: <BarChartOutlined />,
    path: "/bar",
  },
  {
    id: 2,
    text: "Pie Chart",
    icon: <PieChartOutlineOutlined />,
    path: "/pie",
  },
  {
    id: 3,
    text: "Line Start",
    icon: <TimelineOutlined />,
    path: "/line",
  },
  {
    id: 4,
    text: "Geography",
    icon: <WidthNormalOutlined />,
    path: "/geography",
  },
];
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open
    ? {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const SideBar = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();
  const theme = useTheme();
   let location = useLocation();
  console.log(location.pathname);
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          ml: "auto",
          mr: "auto",
          width: open ? "80px" : "45px",
          height: open ? "80px" : "45px",
          my: "12px",
          border: "2px solid grey",
          transition: "0.25s",
        }}
        alt="Error in Page"
        src="/public/avatarimg.jpg"
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? "17px" : "0px", transition: "0.25s" }}
      >
        Adham Hashem
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? "15px" : "0px",
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
             onClick={() => {
                navigate(item.path);
              }}
              sx={{
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: location.pathname == item.path ? (theme.palette.mode=="dark" ? "grey.800" : "grey.300") : null,
              }}
             
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
             onClick={() => {
                navigate(item.path);
              }}
              sx={{
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: location.pathname == item.path ? (theme.palette.mode=="dark" ? "grey.800" : "grey.300") : null,
              }}
             
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
             onClick={() => {
                navigate(item.path);
              }}
              sx={{
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: location.pathname == item.path ? (theme.palette.mode=="dark" ? "grey.800" : "grey.300") : null,
              }}
             
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};
export default SideBar;
