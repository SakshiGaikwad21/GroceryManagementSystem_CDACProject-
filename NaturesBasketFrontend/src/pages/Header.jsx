import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/e_logo.jpg";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav class="navbar  navbar-expand-lg custom-bg text-color">
        <div class="container-fluid text-color">
          <img
            src={logo}
            width="100"
            height="90"
            class="d-inline-block align-top"
            alt="logo"
          />
          <Link to="/" class="navbar-brand">
            <i className="text-color ">
              
              <h2>Nature's Basket</h2>
            </i>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about" class="nav-link active" aria-current="page">
                  <h5 className="text-color">About</h5>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" class="nav-link active" aria-current="page">
                  <h5 className="text-color">Contact</h5>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/FAQ" class="nav-link active" aria-current="page">
                  <h5 className="text-color">FAQ</h5>
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
