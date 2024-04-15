// styles

import { useEffect, useState } from "react";
import "./index.css";
import { ArtistProps, getUserTopArtists } from "../../gateway/Artist";
import ArtistList from "../../containers/Artists/ArtistList";

function Artists() {
  const [topArtists, setTopArtists] = useState<ArtistProps[] | null>(null);

  useEffect(() => {
    async function fetchTopArtists() {
      const artists = await getUserTopArtists();
      setTopArtists(artists);
    }

    fetchTopArtists();
  }, []);

  return (
    <div className="Artists">
      <div className="artistsPageTitle">Top Artistas</div>
      Aqui você encontra seus artistas preferidos
      <ArtistList items={topArtists || []} />
    </div>
  );
}

export default Artists;
