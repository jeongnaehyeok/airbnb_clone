import React from "react";
import classNames from "classnames";

import "./Navbar.scss";

import useNavActive from "@/components/utils/useNavActive";

import Logo from "@/components/navbar/Logo";
import UserMenu from "@/components/navbar/UserMenu";

const Navbar = () => {
  const { navAtcive } = useNavActive();
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
