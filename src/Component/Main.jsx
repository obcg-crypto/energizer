import React, { useState } from 'react';
import Navigation from '../ComponentUI/Navigation';
import MainContainer from '../ComponentUI/MainContainer';
import {BsGlobe} from 'react-icons/bs'
import{IoNewspaperOutline} from 'react-icons/io5'
import{AiOutlineBars} from 'react-icons/ai'
import Profil from "../ComponentUI/Profil"
import logo from "../assets/logoCnps.png"
const Main = () => {
    const [active,setActive] = useState(1)
    return (
        <div className='mainContainer position-fixed fixed-top'>
            <div className='NavigationContainer'>
                <div className="d_flex mt-2">
                    <img src={logo} alt="Logo Cnps" className='logoCnps' />                                                                                         
                    <Navigation setActive={setActive} active={`${active==1?"active":""}`} text="Traitement / Etat"/>
                    <Navigation setActive={setActive} active={`${active==2?"active":""}`} text="Suivies"/>
                    <Navigation setActive={setActive} active={`${active==3?"active":""}`} text="Diverses Extraction"/>
                </div>
                 <div className='IconContainer mt-2 '>
                    <div className='IconElement pt-2 pl-2 pr-2'>
                        <BsGlobe className='white_font'/>
                        <span className='m-2 '>Dossier en ligne</span>
                    </div>
                    <div className='IconElement pt-2 pl-2 pr-2'>
                    <IoNewspaperOutline className='white_font'/>
                    <span className='m-2'>Situation Dossier</span> 
                    </div>
                    <div className='IconElement pt-2 pl-2 pr-2'>
                    <AiOutlineBars className='white_font'/>
                    <span className='m-2'>Historique</span>
                    </div>
                    <Profil/>
                </div>
            </div>
            
            <MainContainer navSideData={active}/>
        </div>
    );
}

export default Main;
