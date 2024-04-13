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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="artists" element={<Artists />}></Route>
        <Route path="playlists" element={<Playlists />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="artists/:id/albums" element={<Discography />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
