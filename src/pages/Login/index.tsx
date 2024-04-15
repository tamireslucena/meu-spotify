import GreenButton from "../../components/GreenButton";
import Logo from "../../components/Logo";

// styles
import "./index.css";

function Login() {
  return (
    <div className="Login">
      <div className="Miolo">
        <Logo />
        Entra com sua conta Spotify clicando no botão abaixo
        <br />
        <br />
        <GreenButton
          label="Entrar"
          onClick={() => {
            window.open(
              `https://accounts.spotify.com/authorize?client_id=${
                import.meta.env.VITE_SPOTIFY_CLIENT_ID
              }&response_type=code&redirect_uri=${
                import.meta.env.VITE_HOST
              }/callback&scope=user-top-read playlist-read-private user-read-private user-read-email playlist-modify-public playlist-modify-private`,
              "_self"
            );
          }}
        />
      </div>
    </div>
  );
}

export default Login;
