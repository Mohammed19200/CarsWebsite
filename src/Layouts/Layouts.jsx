import React from "react";
import NavScroll from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";

export default function Layouts() {
  return (
    <div>
      <NavScroll />
      <Outlet />
      <Footer />
    </div>
  );
}
