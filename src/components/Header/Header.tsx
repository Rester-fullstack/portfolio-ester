import { useEffect, useState } from "react";

import SideMenu from "../SideMenu/SideMenu";

import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      <header
        className={
          scrolled
            ? "header scrolled"
            : "header"
        }
      >
        <a
          href="/"
          className="header-logo"
        >
          <span className="header-logo-name">
            ESTER
          </span>

          <span className="header-logo-role">
            SOFTWARE DEVELOPER
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() =>
            setMenuOpen(true)
          }
          aria-label="Abrir menu"
        >
          MENU

          <span className="menu-button-line" />
        </button>
      </header>

      <SideMenu
        open={menuOpen}
        onClose={() =>
          setMenuOpen(false)
        }
      />
    </>
  );
}