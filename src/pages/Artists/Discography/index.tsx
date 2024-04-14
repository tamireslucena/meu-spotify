// styles

import { useEffect, useState } from "react";
import "./index.css";
import spotify from "../../../services/spotify";
import { useLocation } from "react-router-dom";
import PlaylistItem from "../../../components/PlaylistItem";
import Template from "../../../containers/Template";

interface Album {
  id: string;
  name: string;
  release_date: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
}

async function getDiscography(id: string): Promise<Album[] | null> {
  try {
    const response = await spotify.get(`/v1/artists/${id}/albums`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching top artists:", error);
    return [
      //TODO: AQUI A GENTE COLOCA UM CACHE
    ];
  }
}

function Discography() {
  const location = useLocation();

  const [albums, setAlbums] = useState<Album[] | null>(null);

  useEffect(() => {
    async function fetchTopArtists() {
      const album = await getDiscography(location.state.id);
      setAlbums(album);
    }

    fetchTopArtists();
  }, [location.state.id]);

  return (
    <Template>
      <div className="Discography">
        <div
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {location.state.artist}
        </div>
        <div className="DiscographyList">
          {albums ? (
            albums.map((album) => (
              <PlaylistItem
                key={album.id}
                icon={album.images[0].url}
                name={album.name}
                description={album.release_date}
              ></PlaylistItem>
            ))
          ) : (
            <p>Carregando álbuns do artista...</p>
          )}
        </div>
      </div>
    </Template>
  );
}

export default Discography;
