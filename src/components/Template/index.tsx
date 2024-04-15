// styles

import Logo from "../Logo";
import MenuItem from "../MenuItem";
import "./index.css";

import home from "../../assets/icons/home.png";
import artistas from "../../assets/icons/artistas.png";
import playlists from "../../assets/icons/playlists.png";
import perfil from "../../assets/icons/perfil.png";
import { Outlet } from "react-router-dom";

function Template() {
  return (
    <div className="Template">
      <div className="sideBar">
        <Logo />
        <br />
        <MenuItem path="/" icon={home}></MenuItem>
        <MenuItem path="/artists" icon={artistas}></MenuItem>
        <MenuItem path="/playlists" icon={playlists}></MenuItem>
        <MenuItem path="/profile" icon={perfil}></MenuItem>
      </div>
      <div className="pageContent">
        <Outlet />
      </div>
    </div>
  );
}

export default Template;
