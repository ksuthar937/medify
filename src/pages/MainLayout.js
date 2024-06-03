import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

export const MainLayout = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
