// styles
import "./index.css";

import { useNavigate } from "react-router-dom";

function ArtistItem({
  id,
  icon,
  label,
}: Readonly<{ id: string; icon: string; label: string }>) {
  const navigate = useNavigate();

  return (
    <div
      className="ArtistItem"
      onClick={() => {
        navigate(`/artists/${id}/albums`, {
          state: { id: id, artist: label, artistImage: icon },
        });
      }}
    >
      <img alt="icon" src={icon}></img>
      {label}
    </div>
  );
}

export default ArtistItem;
