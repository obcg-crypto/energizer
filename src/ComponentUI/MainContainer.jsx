import React, { useState } from 'react';
import NavSide from './NavSide';
import banner from '../assets/cnpsBanner.png'
//import banner from '../assets/cnpsBanner.png'
//import Suivi_des_dossiers from './suivi_des_dossier';
//import Nombre_dossiers_traites_via_GED_LAD from './nombre_dossiers_traites_via_GED_LAD';
//import Nombre_Dossiers_Par_Nature_Prestations from './Nombre_Dossiers_Par_Nature_Prestations';
//import Nombre_Dossiers_Avec_Statut_Par_Nature_Prestations from './Nombre_Dossiers_Avec_Statut_Par_Nature_Prestations';
import Statistiques_situations_dossiers_par_branches from './Statistiques_situations_dossiers_par_branches';
import Statistiques_duree_traitement_des_dossiers from './Statistiques_duree_traitement_des_dossiers';
import Consultation_des_droits_rattaches_a_un_assure from './Consultation_des_droits_rattaches_a_un_assure';
import Statistiques_paiement_a_la_caisse from './Statistiques_paiement_a_la_caisse';


const MainContainer = ({navSideData}) => {
    const [container,setContainer] = useState();
    const handleDisplayContainer = ()=>{
        if (container === 'Paiement a la caisse') {
            console.log(container)
            return <Statistiques_paiement_a_la_caisse/>
        } else if(container === "Des droits rattaches a un assure"){
            return <Consultation_des_droits_rattaches_a_un_assure/>
        }else{
            return <h1>DATA NOT FOUND</h1>
        }
    }
    return (
        <div className='mainBox'>
            <NavSide setContainer={setContainer} navSideData={navSideData}/>
            <div className='leftContainer dynamiquePosition'>
                <div className='container-fluid'>
                    {handleDisplayContainer()}
                </div>
                <div class="image-container">
                    <img src={banner} className='bannerImg' alt="" srcset="" />
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
