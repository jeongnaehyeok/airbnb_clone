import React from "react";
import classNames from "classnames";

import "./Navbar.scss";

import useNavAtive from "../components/utils/useNavAtive";

import Logo from "../components/navbar/Logo";
import UserMenu from "../components/navbar/UserMenu";

const Navbar = () => {
  const { navAtive } = useNavAtive();
  return (
    <div className={classNames("navbararea", navAtive)}>
      <div className="container">
        <div className="navbar">
          <Logo navAtive={navAtive} />
          <UserMenu navAtive={navAtive} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
