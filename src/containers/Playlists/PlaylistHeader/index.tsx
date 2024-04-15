import GreenButton from "../../../components/GreenButton";

interface PlaylistHeaderProps {
  handleOpen: () => void;
}

function PlaylistHeader({ handleOpen }: PlaylistHeaderProps) {
  return (
    <div className="PlaylistHeader">
      <div className="PlaylistTitle">Minhas Playlists</div>
      <br />
      <GreenButton label="Criar playlist" onClick={handleOpen} />
    </div>
  );
}

export default PlaylistHeader;
