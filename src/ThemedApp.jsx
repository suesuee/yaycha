import { useState, createContext, useContext } from "react";
import App from "./App.jsx";
import { CssBaseLine, ThemeProvider, createTheme } from "@mui/material";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

export default function ThemedApp() {
  const [mode, setMode] = useState("dark");
  const [showForm, setShowForm] = useState(false);

  const theme = createTheme({
    palette: {
      mode: mode, // mode state here
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ mode, setMode, showForm, setShowForm }}>
        <App />
        <CssBaseLine />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
