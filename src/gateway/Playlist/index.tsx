import spotify from "../../services/spotify";

export interface PlaylistProps {
  id: string;
  name: string;
  description: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
}

export interface PlaylistListProps {
  items: PlaylistProps[];
  total: number;
}

interface PaginationParams {
  limit: number;
  offset: number;
}

export async function getUserPlaylists(
  params?: PaginationParams
): Promise<PlaylistListProps> {
  const response = await spotify.get("/v1/me/playlists", {
    params,
  });
  return response.data;
}

export async function createPlaylist(name: string): Promise<void> {
  const userProfile = await spotify.get("/v1/me");
  const userId = userProfile.data.id;

  await spotify.post(`/v1/users/${userId}/playlists`, {
    name: name,
  });
}
