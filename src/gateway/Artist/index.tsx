import spotify from "../../services/spotify";

export interface ArtistProps {
  id: string;
  name: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
}

export interface AlbumProps {
  id: string;
  name: string;
  release_date: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
}

export async function getUserTopArtists(): Promise<ArtistProps[] | null> {
  const response = await spotify.get("/v1/me/top/artists", {
    params: {
      time_range: "medium_term",
    },
  });
  return response.data.items;
}

export async function getDiscography(id: string): Promise<AlbumProps[] | null> {
  const response = await spotify.get(`/v1/artists/${id}/albums`);
  return response.data.items;
}
