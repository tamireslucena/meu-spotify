// styles
import ItemsList from "../../../components/ItemList";
import { ArtistProps } from "../../../gateway/Artist";
import ArtistItem from "../ArtistItem";
import "./index.css";

function ArtistList({ items }: Readonly<{ items: ArtistProps[] }>) {
  return (
    <ItemsList
      className="ArtistList"
      itemComponentMapping={(topArtist) => (
        <ArtistItem
          key={topArtist.id}
          id={topArtist.id}
          icon={topArtist.images[0].url}
          label={topArtist.name}
        ></ArtistItem>
      )}
      loadingComponent={<p>Carregando top artistas...</p>}
      items={items}
    />
  );
}

export default ArtistList;
