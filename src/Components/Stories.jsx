import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Stories = () => {
  const [stori, setStori] = useState([]);
  const [loding, setLoding] = useState(true);

  const getdata = () => {
    axios
      .get(
        "https://gateway.marvel.com/v1/public/stories?ts=1&apikey=a89922fc3dff570a0314a981b7c40fe8&hash=9a28b6c94c59b070a4b50200786f39b2"
      )
      .then((res) => {
        setStori(res.data.data.results);
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
        <h1>Stories</h1>
      </div>
      <div className="main">
        {stori.map((e) => {
          return (
            <div className="box1">
              <div className="imgdiv">
                <img src="imgs/imgnot.jpg" alt="" />
              </div>
              <div className="titelcards">
                <h6>{e.originalIssue.name}</h6>
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

export default Stories;
