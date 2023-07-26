import React from 'react';
import Aside from '../ComponentUI/Aside';
import logo from '../assets/logoCnps.png'
const Header = () => {
    return (
        <div className='headerContainer position-fixed fixed-top'>
            <img src={logo} alt="Logo Cnps" className='logoCnps' />
            <Aside/>
        </div>
    );
}

export default Header;
