// styles

import { useEffect, useState } from "react";
import "./index.css";
import ProfileItem from "../../containers/Profile/ProfileItem";
import { ProfileProps, getUserProfile } from "../../gateway/Profile";
import defaultUserCover from "../../../assets/images/default_user_cover.png";

function Profile() {
  const [userProfile, setUserProfile] = useState<ProfileProps | null>(null);

  useEffect(() => {
    async function fetchUserProfile() {
      const userProfile = await getUserProfile();
      setUserProfile(userProfile);
    }

    fetchUserProfile();
  }, []);

  return (
    <div className="Profile">
      {userProfile ? (
        <ProfileItem
          icon={userProfile.images?.[0].url ?? defaultUserCover}
          displayName={userProfile.display_name}
        ></ProfileItem>
      ) : (
        <p>Carregando informações do usuário...</p>
      )}
    </div>
  );
}

export default Profile;
