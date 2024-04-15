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
            client_id: "750947f3ef294af6acc33e8dde6c80b2",
            client_secret: "5ada7af4ae3d40268bd6c663498ac46f",
            code: userToken,
            redirect_uri: "http://localhost:5173/callback",
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
