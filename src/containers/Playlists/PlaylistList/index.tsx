// styles
import ItemsList from "../../../components/ItemList";
import PlaylistItem from "../PlaylistItem";
import defaultPlaylistCover from "../../../assets/images/default_playlist_cover.png";
import "./index.css";

import { PlaylistProps } from "../../../gateway/Playlist";

function PlaylistList({ items }: Readonly<{ items: PlaylistProps[] }>) {
  return (
    <ItemsList
      className="PlaylistList"
      itemComponentMapping={(playlist) => (
        <PlaylistItem
          key={playlist.id}
          icon={playlist.images?.[0].url ?? defaultPlaylistCover}
          name={playlist.name}
          description={(playlist as PlaylistProps).description}
        />
      )}
      loadingComponent={<p>Carregando suas playlists...</p>}
      items={items}
    />
  );
}

export default PlaylistList;
