"use client";
import Link from "next/link";
import imgMenu from "../assets/iconMenu.svg";
import "@/styles/menu.css";
import { useState } from "react";

const Menu = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={`header ${active ? "active" : ""}`}>
      <nav className="nav">
        <img
          className="icon-menu"
          src={imgMenu.src}
          width={40}
          height={40}
          onClick={() => setActive(!active)}
          alt="menu"
        />

        <div className="sec-links">
          <Link href="/" className="link-menu">
            Home
          </Link>
          <Link href="/movies/1" className="link-menu">
            Movies
          </Link>
          <Link href="/series" className="link-menu">
            Series
          </Link>
          <Link href="/upcoming" className="link-menu">
            Upcoming
          </Link>
        </div>
        <p className="title-footer">All rights reserved 2024</p>
      </nav>
      
    </header>
  );
};

export default Menu;
