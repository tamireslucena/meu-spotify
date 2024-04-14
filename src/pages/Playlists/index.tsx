// styles

import { useEffect, useState } from "react";
import "./index.css";
import Template from "../../containers/Template";
import spotify from "../../services/spotify";
import PlaylistItem from "../../components/PlaylistItem";
import GreenButton from "../../components/GreenButton";

interface Playlist {
  id: string;
  name: string;
  description: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
}

async function getUserPlaylists(): Promise<Playlist[] | null> {
  try {
    const response = await spotify.get("/v1/me/playlists", {
      params: {
        limit: 10,
        offset: 0,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [
      {
        description: "string",
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            height: 300,
            width: 300,
          },
        ],
        name: "string",
      },
    ];
  }
}

function Playlists() {
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);

  useEffect(() => {
    async function fetchPlaylists() {
      const userPlaylists = await getUserPlaylists();
      setPlaylists(userPlaylists);
    }

    fetchPlaylists();
  }, []);

  return (
    <Template>
      <div className="Playlists">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Minhas Playlists
          </div>
          <br />
          <GreenButton label="Criar playlist" />
        </div>
        Sua coleção pessoal de playlists
        <div className="PlaylistList">
          {playlists ? (
            playlists.map((playlist) => (
              <PlaylistItem
                key={playlist.id}
                icon={playlist.images[0].url}
                name={playlist.name}
                description={playlist.description}
              ></PlaylistItem>
            ))
          ) : (
            <p>Carregando suas playlists...</p>
          )}
        </div>
      </div>
    </Template>
  );
}

export default Playlists;
