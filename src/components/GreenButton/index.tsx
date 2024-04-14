// styles
import "./index.css";

function GreenButton({
  label,
  onClick,
}: Readonly<{ label: string; onClick?: () => void }>) {
  return (
    <button className="GreenButton" onClick={onClick ?? (() => {})}>
      {label}
    </button>
  );
}

export default GreenButton;
