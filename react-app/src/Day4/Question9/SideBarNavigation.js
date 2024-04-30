import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Setting from "./Setting";
import Logout from "./Logout";
import AboutUs from "./AboutUs";
import Charts from "./Charts";

export const SideBarNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="setting" element={<Setting />}></Route>
          <Route path="logout" element={<Logout />}></Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="charts" element={<Charts />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
