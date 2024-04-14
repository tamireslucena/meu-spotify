// styles

import { useEffect, useState } from "react";
import "./index.css";
import Template from "../../containers/Template";
import spotify from "../../services/spotify";
import ProfileItem from "../../components/ProfileItem";

interface Profile {
  display_name: string;
  id: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
}

async function getUserProfile(): Promise<Profile | null> {
  try {
    const response = await spotify.get("/v1/me");

    return response.data;
  } catch (error) {
    console.error("Error fetching top artists:", error);
    return {
      display_name: "string",
      id: "string",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
          height: 300,
          width: 300,
        },
      ],
    };
  }
}

function Profile() {
  const [userProfile, setUserProfile] = useState<Profile | null>(null);

  useEffect(() => {
    async function fetchUserProfile() {
      const userProfile = await getUserProfile();
      setUserProfile(userProfile);
    }

    fetchUserProfile();
  }, []);

  return (
    <Template>
      <div className="Profile">
        {userProfile ? (
          <ProfileItem
            icon={userProfile.images[0].url}
            displayName={userProfile.display_name}
          ></ProfileItem>
        ) : (
          <p>Carregando informações do usuário...</p>
        )}
      </div>
    </Template>
  );
}

export default Profile;
