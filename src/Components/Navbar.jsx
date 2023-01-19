import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link>
              <img className='img' src="imgs/marvel.jpg" alt=""/>
            </Link>
            <Link className='links' to={"/"}>
                <p className="title">Characters</p>
            </Link>
            <Link className='links' to={"/comics"}>
                <p className="title">Comics</p>
            </Link>
            <Link className='links' to={"/stories"}>
                <p className="title">Stories</p>
            </Link>
        </div>
    );
}

export default Navbar;
