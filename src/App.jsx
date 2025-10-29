import * as React from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./Theme";
import {  HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Team from "./components/pages/team/Team";
import Contacts from "./components/pages/contacts/Contacts";
import Invoices from "./components/pages/invoices/Invoices";
import Profile from "./components/pages/profile/Profile";
import Calendar from "./components/pages/calendar/Calendar";
import Faq from "./components/pages/faq/Faq";
import Bar from "./components/pages/bar/Bar";
import Bie from "./components/pages/pie/Bie";
import Line from "./components/pages/line/Line";
import Geography from "./components/pages/geography/Geography";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //dark mode usestate and create theme
  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "light"
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <TopBar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            setMode={setMode}
          />
          <SideBar handleDrawerClose={handleDrawerClose} open={open} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Bie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </HashRouter>
  );
}
