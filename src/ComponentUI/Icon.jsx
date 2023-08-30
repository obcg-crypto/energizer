import React from 'react';
import {BsGlobe} from 'react-icons/bs'
import{IoNewspaperOutline} from 'react-icons/io5'
import{AiOutlineBars} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Icon = () => {
    return (
        <div className='IconContainer'>
            <div className='IconElement m-3'>
                <BsGlobe/>
                <Link to="/">
                    <span className='m-2'>Dossier en ligne</span>
                </Link>
            </div>
            <div className='IconElement m-3'>
               <IoNewspaperOutline/>
               <Link to="/">
                   <span className='m-2'>Situation Dossier</span>
               </Link> 
            </div>
            <div className='IconElement m-3'>
               <AiOutlineBars/>
               <Link to="/">
                   <span className='m-2'>Historique</span>
               </Link>
            </div>
            
        </div>
    );
}

export default Icon;
