import React from 'react';
import Aside from '../ComponentUI/Aside';
import logo from '../assets/logoCnps.png'
import banner from '../assets/cnpsBanner.png'

const Header = () => {
    return (
        <div className='headerContainer position-fixed fixed-top'>
            <Aside/>
        </div>
    );
}

export default Header;
