import React, { useEffect, useState } from "react";

const useNavAtive = () => {
  const [state, setState] = useState({ navAtive: "deactive" });
  const onScroll = () => {
    setState({ navAtive: window.scrollY > 58 ? "active" : "deactive" });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default useNavAtive;
