import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
