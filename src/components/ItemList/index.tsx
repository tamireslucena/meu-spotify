import { ArtistProps } from "../../gateway/Artist";
import { PlaylistProps } from "../../gateway/Playlist";

function ItemsList({
  className,
  items,
  itemComponentMapping,
  loadingComponent,
}: Readonly<{
  className: string;
  items: (PlaylistProps | ArtistProps)[];
  itemComponentMapping: (item: PlaylistProps | ArtistProps) => JSX.Element;
  loadingComponent: JSX.Element;
}>) {
  return (
    <div className={className}>
      {items.length > 0 ? items.map(itemComponentMapping) : loadingComponent}
    </div>
  );
}

export default ItemsList;
