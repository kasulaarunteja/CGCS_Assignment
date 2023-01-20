import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


const Comics = () => {
  const [data, setData] = useState([]);

  const getdata = () => {
    axios
    .get
    ("https://gateway.marvel.com/v1/public/comics?ts=1&apikey=a89922fc3dff570a0314a981b7c40fe8&hash=9a28b6c94c59b070a4b50200786f39b2")
    .then((res) => {
      setData(res.data.data.results);
      console.log(res.data.data.results)
    });
  };

  useEffect(() => {
    getdata();
  },[])

  return (
    <div>
      <div className="b">
        <h1>Comics</h1>
      </div>
      {
        data.map((e) => {
         return(
          <>
           <img
          src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
          alt="Product Name"
        />
        <h2>{e.title}</h2>
        <button>Add to cart</button>
          </>
         )
        })
      }
    </div>
  );
};

export default Comics;
