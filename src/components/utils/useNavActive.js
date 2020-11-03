import React, { useEffect, useState } from "react";

const useNavActive = () => {
  const [state, setState] = useState({ navAtcive: "deactive" });
  const onScroll = () => {
    setState({ navAtcive: window.scrollY > 58 ? "active" : "deactive" });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default useNavActive;
