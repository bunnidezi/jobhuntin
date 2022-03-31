import React from "react";
import PrimarySearchAppBar from "./components/SearchAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  shape: { borderRadius: 16 },
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:id" element={<DetailsPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
