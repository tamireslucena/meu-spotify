import GreenButton from "../../../components/GreenButton";
import "./index.css";

interface PlaylistHeaderProps {
  handleOpen: () => void;
}

function PlaylistHeader({ handleOpen }: PlaylistHeaderProps) {
  return (
    <div className="PlaylistHeader">
      <div className="playlistTitle"> Minhas Playlists</div>
      <GreenButton label="Criar playlist" onClick={handleOpen} />
    </div>
  );
}

export default PlaylistHeader;
