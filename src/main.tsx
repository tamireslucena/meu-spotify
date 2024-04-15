// library methods
import React from "react";
import ReactDOM from "react-dom/client";

// pages

// styles
import "./index.css";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Playlists from "./pages/Playlists";
import Discography from "./pages/Artists/Discography";
import Template from "./components/Template";
import Callback from "./pages/Callback";
import AuthCheck from "./components/AuthCheck";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthCheck>
              <Template />
            </AuthCheck>
          }
        >
          <Route index path="" element={<Home />}></Route>
          <Route path="artists" element={<Artists />}></Route>
          <Route path="playlists" element={<Playlists />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="artists/:id/albums" element={<Discography />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/callback" element={<Callback />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
