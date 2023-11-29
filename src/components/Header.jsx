import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
            <Navbar.Brand as={Link} to="/" onClick={handleLinkClick}>
              Logo
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleNavbarToggle}
            />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}
