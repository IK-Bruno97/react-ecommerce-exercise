import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
    <Nav />
    <Outlet />
    <br></br>
    <Footer />
    </>
  )
};

export default Layout;
