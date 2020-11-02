import React, { useRef } from "react";
import classNames from "classnames";

import "./UserMenu.scss";

import useOutSideClick from "../utils/useOutSideClick";

import RoundButton from "../utils/RoundButton";

const GlobalIcon = () => {
  return (
    <>
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        focusable="false"
        style={{
          display: "block",
          height: "16px",
          width: "16px",
          fill: "currentcolor",
          marginRight: "6px",
        }}
      >
        <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
      </svg>
      <svg
        width="9"
        height="6"
        viewBox="0 0 9 6"
        fill="none"
        style={{ display: "block" }}
      >
        <path
          d="M1 1L4.5 4.5L8 1"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </>
  );
};

const UserIcon = () => {
  return (
    <>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        focusable="false"
        style={{
          display: "block",
          fill: "none",
          height: "16px",
          width: "16px",
          stroke: "#222222",
          strokeWidth: "3",
          overflow: "visible",
          marginRight: "12px",
        }}
      >
        <g fill="none" fillRule="nonzero">
          <path d="m2 16h28"></path>
          <path d="m2 24h28"></path>
          <path d="m2 8h28"></path>
        </g>
      </svg>

      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        focusable="false"
        style={{
          display: "block",
          height: "30px",
          width: "30px",
          fill: "#717171",
        }}
      >
        <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
      </svg>
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
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "16px",
                    width: "16px",
                    fill: "currentcolor",
                  }}
                >
                  <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                </svg>
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
