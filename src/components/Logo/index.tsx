// styles
import "./index.css";

import logo from "../../assets/images/Spotify_Logo_RGB_White.png";

function Logo() {
  return (
    <div className="Logo">
      <img alt="spotify" style={{ width: "164px" }} src={logo} />
    </div>
  );
}

export default Logo;
