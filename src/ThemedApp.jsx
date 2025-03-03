import { useState, createContext, useContext, useMemo } from "react";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Template from "./Template";
import Home from "./pages/Home";

import { deepPurple, grey } from "@mui/material/colors";

// Custom Hook
const AppContext = createContext();
export function useApp() {
  return useContext(AppContext);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default function ThemedApp() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [globalMsg, setGlobalMsg] = useState(null);
  const [auth, setAuth] = useState(false);
  const [mode, setMode] = useState("dark");

  //   const theme = createTheme({
  //     palette: { mode }, // mode state here
  //   });

  /*  const theme = useMemo(() => {
    return createTheme({
      palette: { mode },
    });
  }, [mode]);
*/

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: deepPurple,
        banner: mode === "dark" ? grey[800] : grey[200],
        text: {
          fade: grey[500],
        },
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          showDrawer,
          setShowDrawer,
          globalMsg,
          setGlobalMsg,
          auth,
          setAuth,
          mode,
          setMode,
          showForm,
          setShowForm,
        }}
      >
        <RouterProvider router={router}></RouterProvider>
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
