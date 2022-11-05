import "./styles.scss";

import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <main className="layout">
      <Sidebar />
      <div className="layout__main">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
