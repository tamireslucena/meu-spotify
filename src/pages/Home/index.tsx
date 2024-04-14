// styles
import { useSearchParams } from "react-router-dom";
import Template from "../../containers/Template";
import "./index.css";
import { useEffect } from "react";

function Home() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    localStorage.setItem("user-token", searchParams.get("code") ?? "");
  }, [searchParams]);

  return (
    <div>
      <Template></Template>
    </div>
  );
}

export default Home;
