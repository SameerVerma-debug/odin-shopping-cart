import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Search } from "./Search";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
  const [sidebar, setSidebar] = useState("none");

  return (
    <div className="header">
      <Link to="/">
        <img src="/assets/images/logo.svg" className="logo" />
      </Link>
      <Search />
      <Navbar />
      <HamburgerMenu setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
};
