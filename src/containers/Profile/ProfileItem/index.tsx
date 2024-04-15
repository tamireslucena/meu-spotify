// styles
import GreenButton from "../../../components/GreenButton";
import "./index.css";

function ProfileItem({
  icon,
  displayName,
}: Readonly<{ icon: string; displayName: string }>) {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="ProfileItem">
      <img alt="icon" src={icon}></img>
      {displayName}
      <br></br>
      <br></br>
      <GreenButton label="Sair" onClick={logout}></GreenButton>
    </div>
  );
}

export default ProfileItem;
