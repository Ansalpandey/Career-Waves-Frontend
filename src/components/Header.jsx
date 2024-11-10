// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const Header = () => {
  const { user } = useUser(); // Access the user data from context

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="my-link">
          <img src="/icon.png" alt="Career Waves Institute Logo" />
          <span>Career Waves Institute</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="my-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="my-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/courses" className="my-link">
              Courses
            </Link>
          </li>
          <li>
          <Link to="/contactus" className="my-link">
              Contact Us
            </Link>
          </li>
          <li className="user-info">
            {user ? (
              <>
                <span className="welcome-user">Welcome, {user.name}!</span>
              </>
            ) : (
              <>
                <Link to="/register" className="my-link">
                  <button className="register-btn">Register</button>
                </Link>
                <Link to="/login" className="my-link">
                  <button className="login-btn">Login</button>
                </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
