"use client";
import Link from "next/link";
import logo from "@/assets/image-db.svg";
import Image from "next/image";
import imgMenu from "../assets/iconMenu.svg";
import "@/styles/menu.css";
import { useState } from "react";
import FormSearch from "./FormSearch";

const Menu = () => {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!active);
  };
  return (
    <header className={`header ${active ? "active" : ""}`}>
      <nav className="nav">
        <Image
          src={logo}
          alt="logo de TMDB"
          title="TMDB"
          className="logo"
          width={100}
          height={60}
        />

        <Image
          className="icon-menu"
          src={imgMenu}
          width={40}
          height={40}
          onClick={handleMenu}
          alt="menu"
        />

        <div className="sec-links">
          <Link href="/" className="link-menu">
            Home
          </Link>
          <Link href="/movies" className="link-menu">
            Movies
          </Link>
          <Link href="/upcoming" className="link-menu">
            Upcoming
          </Link>
          <Link href="/series" className="link-menu">
            Series
          </Link>
        </div>
        
        <FormSearch />
      </nav>
    </header>
  );
};

export default Menu;
