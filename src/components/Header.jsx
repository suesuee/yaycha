import { useApp } from "../ThemedApp.jsx";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import {
  Menu as MenuIcon,
  Add as AddIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

export default function Header() {
  const { showForm, setShowForm, mode, setMode, setShowDrawer } = useApp();

  return (
    // AppBar and ToolBar creates a top bar using AppBar component
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* Open the sidebar (AppDrawer.jsx) when clicked */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setShowDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Typography sx={{ flexGrow: 1, ml: 2 }}>Yaycha</Typography>

        <Box>
          <IconButton color="inherit" onClick={() => setShowForm(!showForm)}>
            {" "}
            {/* Toggle the form */}
            <AddIcon />
          </IconButton>

          {/* Add more toggle buttons here */}
          {mode === "dark" ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMode("light")}
            >
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMode("dark")}
            >
              <DarkModeIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
