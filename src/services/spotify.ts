import axios, { AxiosResponse } from "axios";

const spotify = axios.create({
  baseURL: "https://api.spotify.com",
});

spotify.interceptors.request.use(async (value) => {
  const token = localStorage.getItem("token");
  if (token) {
    value.headers.set("Authorization", `Bearer ${token}`);
    return value;
  }

  const userToken = localStorage.getItem("user-token");

  const responseAuth: AxiosResponse<{ access_token: string }> =
    await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "authorization_code",
        client_id: "750947f3ef294af6acc33e8dde6c80b2",
        client_secret: "5ada7af4ae3d40268bd6c663498ac46f",
        code: userToken,
        redirect_uri: "http://localhost:5173/home",
        scopes:
          "user-top-read playlist-read-private user-read-private user-read-email",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

  const accessToken = responseAuth.data.access_token;

  localStorage.setItem("token", accessToken);

  value.headers.set("Authorization", `Bearer ${accessToken}`);

  return value;
});

export default spotify;
