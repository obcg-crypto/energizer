import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Asidelogo = () => {
    return (
        <div className='ProfilContainer'>
            <Link to="/">
                <BiSolidUserCircle />
            </Link>
        </div>
    );
}

export default Asidelogo;
