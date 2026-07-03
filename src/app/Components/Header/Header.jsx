"use client";
import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas
} from "react-bootstrap";
import { FaPhoneAlt, FaBars } from "react-icons/fa";
import "./Header.css";
import Link from "next/link";

function Header() {
  const [show, setShow] = useState(false);
  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Services", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  return (
    <>
      <header className="Custom-Header">
        <Container>
          <div className="header-wrapper">

            {/* Logo */}
            <div className="logo">
              <Link href="/">
                <h4>Dot.Com Immigration</h4>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <Nav className="desktop-nav">
              {navItems.map((item, index) => (
                <Nav.Link key={index} href={item.link}>
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>

            {/* Phone Section */}
            <div className="header-contact">
              <div className="phone-icon">
                <FaPhoneAlt />
              </div>

              <div className="contact-text">
                <span>Need Help?</span>
                <Link href="tel:+911234567890">
                  +91 12345 67890
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="menu-btn"
              onClick={() => setShow(true)}
            >
              <FaBars />
            </button>

          </div>
        </Container>
      </header>

      {/* Mobile Offcanvas */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>

          <Nav className="flex-column mobile-nav">
            {navItems.map((item, index) => (
              <Nav.Link
                key={index}
                href={item.link}
                onClick={() => setShow(false)}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>

          <div className="mobile-contact">
            <FaPhoneAlt />
            <div>
              <span>Need Help?</span>
              <Link href="tel:+911234567890">
                +91 12345 67890
              </Link>
            </div>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;