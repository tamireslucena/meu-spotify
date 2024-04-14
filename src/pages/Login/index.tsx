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
              "https://accounts.spotify.com/authorize?client_id=750947f3ef294af6acc33e8dde6c80b2&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fhome&scope=user-top-read playlist-read-private user-read-private user-read-email",
              "_self"
            );
          }}
        />
      </div>
    </div>
  );
}

export default Login;
