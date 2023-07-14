import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const MainLayout = () => {
  return (
    <div>
     
      <Navbar />
    <section className="mt-[4rem]">
    <Outlet></Outlet>
    </section>
      <Footer/>
    </div>
  );
};

export default MainLayout;
