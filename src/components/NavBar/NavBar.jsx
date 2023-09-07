import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/">
            <h2 className="navbar-brand">Mi Tiendita NBA</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/categoria/1">
                  Camisetas
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active" to="/categoria/2">
                  Pantalones
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active" to="/categoria/3">
                  Conjuntos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
