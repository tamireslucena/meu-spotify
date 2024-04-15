// styles
import "./index.css";

function PlaylistItem({
  icon,
  name,
  description,
}: Readonly<{ icon: string; name: string; description: string }>) {
  return (
    <div className="PlaylistItem">
      <img alt="icon" src={icon}></img>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div>{name}</div>
        <div
          style={{
            fontSize: "13px",
            color: "gray",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}

export default PlaylistItem;
