import React from "react";
import classNames from "classnames";

import "./Navbar.scss";

import usenavAtcive from "../components/utils/usenavAtcive";

import Logo from "../components/navbar/Logo";
import UserMenu from "../components/navbar/UserMenu";

const Navbar = () => {
  const { navAtcive } = usenavAtcive();
  return (
    <div className={classNames("navbararea", navAtcive)}>
      <div className="container">
        <div className="navbar">
          <Logo navAtcive={navAtcive} />
          <UserMenu navAtcive={navAtcive} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
