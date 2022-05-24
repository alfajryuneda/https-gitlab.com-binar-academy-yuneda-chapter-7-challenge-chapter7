import { Outlet } from "react-router-dom";
import Navbar from "../components/molecules/navbar/Navbar";
import Sidebar from "../components/molecules/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div>
      {/* START NAVBAR */}
      <Navbar />
      {/* Offcanvas for sidebar */}
      <Sidebar />
      {/* END NAVBAR */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
