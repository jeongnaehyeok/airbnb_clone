import React, { useEffect, useState } from "react";
import qs from "query-string";
import api from "@/api";

import "./Result.scss";

const Result = ({ location }) => {
  const [testList, setTestList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const query = qs.parse(location.search);
  const defaultJSON = {
    area: "서울",
    checkin: "2020-11-16",
    checkout: "2020-11-20",
    adults: 1,
    children: 0,
    infants: 0,
  };
  const filter = { ...defaultJSON, ...query };
  useEffect(() => {
    setLoading(true);
    setError(null);
    setTestList(null);
    const fetchTestList = () => {
      api
        .post("api/", { ...filter })
        .then((res) => {
          console.log(res.data["data"]);
          console.log("test");
          setTestList(res.data["data"]);
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
        });
    };
    fetchTestList();
  }, []);
  if (loading) return <div className="result">로딩중</div>;
  if (error) return <div className="result">에러발생</div>;
  if (!testList) return null;
  return (
    <div className="result">
      <ul>
        {testList.map((item) => (
          <li key={item.id}>
            <img src={item.img} />
            <div className="contents">
              <h3>{item.name}</h3>
              <p>{item.location}</p>
              <p>{item.information}</p>
              <p>{item.states}</p>
              <h4>{item.onprice}</h4>
              <p>별점: {item.star}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
