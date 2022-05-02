import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import './navigation.styles.scss';

const Navigation = () => {
    return(
      <Fragment>
        <div className="navigation-container">
          <Link className="logo-container" to="/">
            <div className="logo">Logo</div>
          </Link>
          
          <div className="nav-links-container">
              
              <Link className="nav-link" to="/about">
                About
              </Link>
              
              <Link className="nav-link" to="/auth">
                Log in
              </Link>

        </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;