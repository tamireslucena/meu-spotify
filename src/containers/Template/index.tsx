// styles

import Logo from "../../components/Logo";
import MenuItem from "../../components/MenuItem";
import "./index.css";

import home from "../../assets/icons/home.png";
import artistas from "../../assets/icons/artistas.png";
import playlists from "../../assets/icons/playlists.png";
import perfil from "../../assets/icons/perfil.png";

//TODO: fixar o termplate
function Template({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        minWidth: "100%",
        minHeight: "100%",
        flexDirection: "row",
      }}
    >
      <div className="SideBar">
        <Logo></Logo>
        <br></br>
        <MenuItem path="/home" icon={home}></MenuItem>
        <MenuItem path="/artists" icon={artistas}></MenuItem>
        <MenuItem path="/playlists" icon={playlists}></MenuItem>
        <MenuItem path="/profile" icon={perfil}></MenuItem>
      </div>
      {children}
    </div>
  );
}

export default Template;
