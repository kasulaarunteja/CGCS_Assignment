import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link>
              <img className='img' src="imgs/marvel.jpg" alt=""/>
            </Link>
            <Link className='links' to={"/"}>
                <p>Characters</p>
            </Link>
            <Link className='links' to={"/comics"}>
                <p>Comics</p>
            </Link>
            <Link className='links' to={"/stories"}>
                <p>Stories</p>
            </Link>
        </div>
    );
}

export default Navbar;
