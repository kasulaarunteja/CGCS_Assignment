import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../App.css";

const Characters = () => {
  const [hero, setHero] = useState([]);
  const [loding, setLoding] = useState(true);


  const getdata = () => {
    axios
      .get(
        "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a89922fc3dff570a0314a981b7c40fe8&hash=9a28b6c94c59b070a4b50200786f39b2"
      )
      .then((res) => {
        setLoding(false);
        setHero(res.data.data.results);
        console.log(res.data.data.results);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return loding ? (  "loding...."
  ) : (
    <>
      <div className="b">
        <h1>Characters </h1>
      </div>
      <div className="main">
        {hero.map((e) => {
          return (
            // <div className="maindiv">
            //   <div className="card" key={e.id}>
            //     <img
            //       src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
            //       alt="Product Name"
            //     />
            //     <div className="container">
            //       <h4>
            //         <b>{e.name}</b>
            //       </h4>
            //       <p>{e.description}</p>
            //     </div>
            //     <button>Add to Cart</button>
            //   </div>
            // </div>

            <div className="box1">
              <div className="imgdiv">
                <img
                  src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
                  alt=""
                />
              </div>
              <div className="titelcards">
                <h4>{e.name}</h4>
                <p>Action figures from the pop culture landscape</p>
              </div>
              <div>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
