import React from 'react';
import {BsGlobe} from 'react-icons/bs'
import{IoNewspaperOutline} from 'react-icons/io5'
import{AiOutlineBars} from 'react-icons/ai'
const Icon = () => {
    return (
        <div className='IconContainer'>
            <div className='IconElement m-3'>
                <BsGlobe/>
                <span className='m-2'>Dossier en ligne</span>
            </div>
            <div className='IconElement m-3'>
               <IoNewspaperOutline/>
               <span className='m-2'>Situation Dossier</span> 
            </div>
            <div className='IconElement m-3'>
               <AiOutlineBars/>
               <span className='m-2'>Historique</span>
            </div>
            
        </div>
    );
}

export default Icon;
