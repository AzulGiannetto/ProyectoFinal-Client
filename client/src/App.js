import './App.css';
import NavBarBlog from "./components/NavBarBlog";
import Sidebar from "./components/sidebar/SideBar";
import Feed from "./pages/Feed/Feed";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* usamos un background color que por defecto solo se torne oscuro el fondo y un text.primary para que las letras no se oscurezcan */}
        <NavBarBlog />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;