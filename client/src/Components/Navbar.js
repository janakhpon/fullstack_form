import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{


    render() {
        return (
          <header className="masthead mb-auto">
            <div className="inner">
              <nav className="nav nav-masthead justify-content-center">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/createform">
                  Create
                </Link>
                <Link className="nav-link" to="/displaylist">
                  Display
                </Link>
                <Link className="nav-link" to="/searchform">
                  Search
                </Link>
              </nav>
            </div>
          </header>
        );
    }
}

export default Navbar;
