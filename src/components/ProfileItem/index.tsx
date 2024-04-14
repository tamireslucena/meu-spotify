// styles
import GreenButton from "../GreenButton";
import "./index.css";

function ProfileItem({
  icon,
  displayName,
}: Readonly<{ icon: string; displayName: string }>) {
  return (
    <div className="ProfileItem">
      <img alt="icon" src={icon}></img>
      {displayName}
      <br></br>
      <br></br>
      <GreenButton label="Sair"></GreenButton>
    </div>
  );
}

export default ProfileItem;
