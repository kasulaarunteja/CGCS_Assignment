import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);

  const getdata = () => {
    axios
      .get(
        "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=a89922fc3dff570a0314a981b7c40fe8&hash=9a28b6c94c59b070a4b50200786f39b2"
      )
      .then((res) => {
        setData(res.data.data.results);
        setLoding(false);
        console.log(res.data.data.results);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return loding ? (
    "loding...."
  ) : (
    <div>
      <div className="b">
        <h1>Comics</h1>
      </div>
      <div className="main">
        {data.map((e) => {
          return (
            <div className="box1">
              <div className="imgdiv">
                <img
                  src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
                  alt=""
                />
              </div>
              <div className="titelcards">
                <h3>{e.series.name}</h3>
                <p>Action figures from the pop culture landscape</p>
              </div>
              <div>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
