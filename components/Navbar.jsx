import Link from "next/link";

import css from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" className="nav-link active">Home</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/contact" className="nav-link active">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/personaje" className="nav-link active">
                Personajes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
