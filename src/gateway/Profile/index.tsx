import spotify from "../../services/spotify";

export interface ProfileProps {
  display_name: string;
  id: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
}

export async function getUserProfile(): Promise<ProfileProps | null> {
  const response = await spotify.post("/v1/me");
  return response.data;
}
