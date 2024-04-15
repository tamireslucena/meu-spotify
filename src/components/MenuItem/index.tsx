// styles
import "./index.css";

import { useNavigate } from "react-router-dom";

function MenuItem({ icon, path }: Readonly<{ icon: string; path: string }>) {
  const navigate = useNavigate();

  const isSelected = path === window.location.pathname;

  return (
    <div className="MenuItem">
      <img
        alt="icon"
        src={icon}
        onClick={() => {
          navigate(path);
        }}
        className={`sideItem ${isSelected ? "selected" : ""}`}
      ></img>
    </div>
  );
}

export default MenuItem;
