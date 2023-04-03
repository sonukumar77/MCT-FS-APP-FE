import {  Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contactUs">ContactUs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
