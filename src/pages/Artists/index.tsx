// styles

import { useEffect, useState } from "react";
import "./index.css";
import ArtistItem from "../../components/ArtistItem";
import Template from "../../containers/Template";
import spotify from "../../services/spotify";

interface Artist {
  id: string;
  name: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
}

async function getUserTopArtists(): Promise<Artist[] | null> {
  try {
    const response = await spotify.get("/v1/me/top/artists", {
      params: {
        time_range: "medium_term",
        limit: 4,
        offset: 0,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching top artists:", error);
    return [
      {
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            height: 300,
            width: 300,
          },
        ],
        name: "Artist name",
      },
      {
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            height: 300,
            width: 300,
          },
        ],
        name: "Artist name 2",
      },
    ];
  }
}

function Artists() {
  const [topArtists, setTopArtists] = useState<Artist[] | null>(null);

  useEffect(() => {
    async function fetchTopArtists() {
      const artists = await getUserTopArtists();
      setTopArtists(artists);
    }

    fetchTopArtists();
  }, []);

  return (
    <Template>
      <div className="Artists">
        <div
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Top Artistas
        </div>
        <br />
        Aqui você encontra seus artistas preferidos
        <div className="ArtistList">
          {topArtists ? (
            topArtists.map((topArtist) => (
              <ArtistItem
                key={topArtist.id}
                id={topArtist.id}
                icon={topArtist.images[0].url}
                label={topArtist.name}
              ></ArtistItem>
            ))
          ) : (
            <p>Carregando top artistas...</p>
          )}
        </div>
      </div>
    </Template>
  );
}

export default Artists;
