import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./Main2";

function Authenticate() {
  const navigate = useNavigate();
  const { auth } = useContext(MyContext);
  return auth.username === "tejas" && auth.password === "1810" ? (
    <Outlet />
  ) : (
    <button className="button" onClick={() => navigate("/login")}>
      login page
    </button>
  );
}

export default Authenticate;
