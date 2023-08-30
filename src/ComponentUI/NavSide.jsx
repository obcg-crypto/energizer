import React, { useEffect, useState } from 'react';
import Accordions from './Accordion';

const NavSide = ({navSideData,setContainer}) => {
    const [displayNav,setDisplayNav]= useState(true)
    useEffect(() => {
        setDisplayNav(true)
    }, [navSideData]);
    const handleDisplayNav = ()=>{
        if (displayNav) {
            return (
                <div className = "MenuContainer">
                    <Accordions setContainer={setContainer} setDisplayNav={setDisplayNav} navSideData={navSideData}/>
                    <div className="navContainer">
                        <div className="navFooter">
                            &copy; CNPS 2023
                        </div>
                        </div>
                    
                </div>
            )
        }
    }
    return (
        <>
        {handleDisplayNav()}
        </>
        
    );
}

export default NavSide;
