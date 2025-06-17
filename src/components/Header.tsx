'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <Image src="/assets/img/tanzeel.png" alt="Tanzeel Academy" width={40} height={40} />
          <h1>Tanzeel Academy</h1>
        </Link>

        <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><Link href="/" className="active">Home</Link></li>
            <li className="dropdown">
              <Link href="/about">
                <span>About</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/programs">Our Programs</Link></li>
              </ul>
            </li>
            <li><Link href="/admissions">Admissions</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <i 
            className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header; 