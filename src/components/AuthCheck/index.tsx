import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUserProfile } from "../../gateway/Profile";

function AuthCheck({ children }: Readonly<{ children?: React.ReactNode }>) {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkTokenValid() {
      try {
        await getUserProfile();
      } catch (e) {
        navigate("/login");
      }
    }

    checkTokenValid();
  }, [navigate]);

  return children;
}

export default AuthCheck;
