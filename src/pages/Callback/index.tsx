// styles
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";

function Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      const userToken = searchParams.get("code") ?? "";

      const responseAuth: AxiosResponse<{ access_token: string }> =
        await axios.post(
          "https://accounts.spotify.com/api/token",
          {
            grant_type: "authorization_code",
            client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
            client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
            code: userToken,
            redirect_uri: `${import.meta.env.VITE_HOST}/callback`,
            scopes:
              "user-top-read playlist-read-private user-read-private user-read-email playlist-modify-public playlist-modify-private",
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

      const accessToken = responseAuth.data.access_token;

      localStorage.setItem("token", accessToken);
    };

    const checkToken = async () => {
      await getToken();
      navigate("/");
    };

    checkToken();
  }, [navigate, searchParams]);

  return <></>;
}

export default Callback;
