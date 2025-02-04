import { Outlet } from "react-router-dom";
import Footer from "../ui/Shared/Footer";
import Navbar from "../ui/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
