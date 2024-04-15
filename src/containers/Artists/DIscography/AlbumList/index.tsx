// styles

import ItemsList from "../../../../components/ItemList";
import { AlbumProps } from "../../../../gateway/Artist";
import PlaylistItem from "../../../Playlists/PlaylistItem";
import "./index.css";

function DiscographyList({ items }: Readonly<{ items: AlbumProps[] }>) {
  return (
    <ItemsList
      className="DiscographyList"
      itemComponentMapping={(album) => (
        <PlaylistItem
          key={album.id}
          icon={album.images[0].url}
          name={album.name}
          description={(album as AlbumProps).release_date}
        ></PlaylistItem>
      )}
      loadingComponent={<p>Carregando álbuns do artista....</p>}
      items={items}
    />
  );
}

export default DiscographyList;
