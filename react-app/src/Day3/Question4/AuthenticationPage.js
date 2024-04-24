import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./MainCopy";

const AuthenticationPage = () => {
  const navigate = useNavigate();
  const { auth } = useContext(MyContext);
  return auth.username === "tejas" && auth.password === "1810" ? (
    <Outlet />
  ) : (
    <button onClick={() => navigate("/login")}>login page</button>
  );
};

export default AuthenticationPage;
