import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Stories = () => {

  const [stori, setStori] = useState([]);

  const getdata = () => {
    axios
      .get(
        "https://gateway.marvel.com/v1/public/stories?ts=1&apikey=a89922fc3dff570a0314a981b7c40fe8&hash=9a28b6c94c59b070a4b50200786f39b2"
      )
      .then((res) => {
        setStori(res.data.data.results);
        console.log(res.data.data.results);
      });
  };

  useEffect(() => {
    getdata();
  }, []);
          



  return (
    <div>
      <div className="b">
        <h1>Stories</h1>
      </div>
      <div>
        {
          stori.map((e) => {
             return(
              <>
              <img
          src={`${e.thumbnail}.${e.thumbnail}`}
          alt="img"
        />
               <h2>{e.originalIssue.name}</h2>
               <p>{e.type}</p>
              </>
             )
          })
        }
      </div>
    </div>
  );
};

export default Stories;
