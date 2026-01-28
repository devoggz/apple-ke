"use client";

import { useState } from "react";
import { navLinks } from "@/app/constants";
import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <img src="/new-logo.png" alt="Apple logo" className="max-w-[84px]" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex">
          {navLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex-center gap-3">
          <ThemeSwitch />

          <button>
            <img src="/search.svg" alt="Search" />
          </button>

          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>

          {/* Hamburger (mobile + tablet) */}
          <button
            className="md:hidden ml-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="hamburger" />
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Menu */}
      <div
        className={`mobile-menu ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <ul onClick={(e) => e.stopPropagation()}>
          {navLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
