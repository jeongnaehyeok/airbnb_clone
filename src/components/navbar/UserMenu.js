import React, { useRef } from "react";
import classNames from "classnames";

import "./UserMenu.scss";

import Global_Icon from "@/assets/svg/Global_Icon";
import DownArrow_Icon from "@/assets/svg/DownArrow_Icon";
import Hamburger_Icon from "@/assets/svg/Hamburger_Icon";
import Profile_Icon from "@/assets/svg/Profile_Icon";

import useOutSideClick from "@/components/utils/useOutSideClick";

import RoundButton from "@/components/utils/RoundButton";

const GlobalIcon = () => {
  return (
    <>
      <Global_Icon />
      <DownArrow_Icon />
    </>
  );
};

const UserIcon = () => {
  return (
    <>
      <Hamburger_Icon />
      <Profile_Icon />
    </>
  );
};

const UserMenu = ({ navAtcive }) => {
  const globaldropRef = useRef(null);
  const userdropRef = useRef(null);
  const [globaldrop, setGlobalDrop] = useOutSideClick(globaldropRef, false);
  const [userdrop, setUserDrop] = useOutSideClick(userdropRef, false);

  const globalClick = () => setGlobalDrop(!globaldrop);
  const userClick = () => setUserDrop(!userdrop);

  return (
    <div className="usermenu">
      <RoundButton
        navAtcive={navAtcive}
        type="a"
        url="https://www.airbnb.co.kr/host/homes"
        contents="호스트 되기"
      />
      <div className="userbutton">
        <RoundButton
          onClick={globalClick}
          navAtcive={navAtcive}
          type="button"
          contents={<GlobalIcon />}
        />
        {globaldrop ? (
          <div
            ref={globaldropRef}
            className={classNames("togglebox", "globalbutton")}
          >
            <a className="togglebox__list" href="/">
              <div className="togglebox__list--icon">
                <Global_Icon />
              </div>
              <div className="togglebox__list--text">한국어(KR)</div>
            </a>
            <a className="togglebox__list" href="/">
              <div className="togglebox__list--icon">₩</div>
              <div className="togglebox__list--text">KRW</div>
            </a>
          </div>
        ) : null}
      </div>
      <div className="userbutton">
        <RoundButton
          onClick={userClick}
          type="button"
          navAtcive={navAtcive}
          color="white"
          contents={<UserIcon />}
        />
        {userdrop ? (
          <div
            ref={userdropRef}
            className={classNames("togglebox", "userbutton")}
          >
            <a className="togglebox__list" href="/">
              <div className="togglebox__list--text">회원가입</div>
            </a>
            <a className="togglebox__list" href="/">
              <div className="togglebox__list--text">로그인</div>
            </a>
            <div className="togglebox__line"></div>
            <a className="togglebox__list" href="/">
              <div className="togglebox__list--text">숙소 호스팅하기</div>
            </a>
            <a className="togglebox__list" href="/">
              <div className="togglebox__list--text">체험 호스팅하기</div>
            </a>
            <a className="togglebox__list" href="/">
              <div className="togglebox__list--text">도움말</div>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserMenu;
