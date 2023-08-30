import React, { useState } from 'react';
import NavSide from './NavSide';
import banner from '../assets/cnpsBanner.png'
import { BrowserRouter as Router, Route } from 'react-router-dom';




// TRAITEMENTS DES DOSSIERS

import Suivi_des_dossiers from './suivi_des_dossier';
import Nombre_dossiers_traites_via_GED_LAD from './nombre_dossiers_traites_via_GED_LAD';
import Nombre_Dossiers_Par_Nature_Prestations from './Nombre_Dossiers_Par_Nature_Prestations';
import Nombre_Dossiers_Avec_Statut_Par_Nature_Prestations from './Nombre_Dossiers_Avec_Statut_Par_Nature_Prestations';
import Statistiques_situations_dossiers_par_branches from './Statistiques_situations_dossiers_par_branches';
import Statistiques_duree_traitement_des_dossiers from './Statistiques_duree_traitement_des_dossiers';
import Consultation_des_droits_rattaches_a_un_assure from './Consultation_des_droits_rattaches_a_un_assure';
import Statistiques_paiement_a_la_caisse from './Statistiques_paiement_a_la_caisse';
import Stat_paiement_dossier_beneficiaire_rubrique from './stat_paiement_dossier_beneficiaire_rubriques';
import Statistiques_photos_rattachees_par_centre from './Statistiques_photos_rattachees_par_centre';
import Consultation_corbeille_par_agent_et_situation from './Consultation_corbeille_par_agent_et_situation';
import Situation_des_corbeilles_par_agent from './Situation_des_corbeilles_par_agent';
import Historique_paiement_GTEC from './Historique_paiement_GTEC';
import Historique_paiement_Sapelli_paiement from './Historique_paiement_Sapelli_paiement';
import Historique_paiement_ENERGIZER from './Historique_paiement_ENERGIZER';
import Statistiques_paiments_nature_prestation_et_mode_paiement from './Statistiques_paiments_nature_prestation_et_mode_paiement';
import Statistiques_paiements_immediats_par_CPS from './statistiques_paiements_immediats_par_CPS'
import Depenses_ordonnancees_prestations from './Depenses_ordonnancees_prestations';
import Liste_dossiers_ATMP from './Liste_dossiers_AT-MP';
import Activites_utilisateurs from './Activites_utilisateurs';
import Statistiques_activites from './Statistiques_activites';



// SUIVI EMPLOYEUR
import Consultation_employeur from './Consultation_employeur';
import Situation_debitrice_employeurs from './Situation_debitrice_employeurs';
import Suivi_des_teledeclarations_employeurs from './Suivi_des_teledeclarations_employeurs';
import Solde_des_comptes_au_mois_le_mois from './Solde_des_comptes_au_mois_le_mois';
import Journal_des_mouvements from './Journal_des_mouvements';
import Statistiques_generales_des_controles_par_periode from './Statistiques_generales_des_controles_par_periode';
import Balance_comptes_a_une_date_donnee from './Balance_comptes_a_une_date_donnee';
import Balance_courante_comptes_avec_totaux_en_CPPRMR from './Balance_courante_comptes_avec_totaux_en_CP-PR-MR';
import Consultation_controles_realises from './Consultation_controles_realises';
import Consultation_corbeilles_controleur from './Consultation_corbeilles_controleur';
import Statistique_encaissements_par_centre_par_periode from './Statistique_encaissements_par_centre_par_periode';
import Consultation_encaissements_en_provenance_banques from './Consultation_encaissements_en_provenance_banques';
import Consultation_encaissments_par_branche_prestation from './Consultation_encaissments_par_branche_prestation';
import Consultation_statistiques_par_cps_des_aps_et_quitus from './Consultation_statistiques_par_cps_des_aps_et_quitus';
import Consultation_bordereaux_edition_APS from './Consultation_bordereaux_edition_APS';
import Statistiques_immatriculation_par_periode from './Statistiques_immatriculation_par_periode';
import Consultation_transfert_employeur from './Consultation_transfert_employeur';
import Statistiques_saisies_encaissements_par_utilisateur_et_par_centre from './Statistiques_saisies_encaissements_par_utilisateur_et_par_centre';
import Consultation_encaissments_employeur from './Consultation_encaissments_employeur';
import Listing_BE_non_execute from './Listing_BE_non_execute';
import Listing_encaissements_en_attente from './Listing_encaissements_en_attente';
import Production_cotisations_sociales from './Production_cotisations_sociales';
import Balance_globale_par_centre from './Balance_globale_par_centre';
import Statistique_suivi_assainissement_compte_employeur from './Statistique_suivi_assainissement_compte_employeur';
import Statistiques_sur_mises_en_demeures_declares from './Statistiques_sur_mises_en_demeures_declares';
import Statistiques_validations_ecritures from './Statistiques_validations_ecritures';
import Listing_quittance from './Listing_quittance';
import Consultation_taux_mobilite from './Consultation_taux_mobilite';

// SUIVI ASSURE
import Consultation_assure from './Consultation_assure';
import Etat_salaire_par_mois from './Etat_salaire_par_mois';
import Etat_elements_liquidation from './Etat_elements_liquidation';
import Etat_salaire_assure from './Etat_salaire_assure';
import Consultation_compte_individuel from './Consultation_compte_individuel';
import Statistique_identifiant_unique from './Statistique_identifiant_unique';
import Consultation_transfert_assure from './Consultation_transfert_assure';
import Consultation_reimputation from './Consultation_reimputation';
import Statistique_assure_volontaire from './Statistique_assure_volontaire';
import Statistique_AV from './Statistique_AV';
import Liste_assure_volontaire from './Liste_assure_volontaire';
import Consultation_encaissement_AV from './Consultation_encaissement_AV';
import Statistique_dossiers_en_ligne from './Statistique_dossiers_en_ligne';
import Consultation_diverses_modifications from './Consultation_diverses_modifications';


// Diverse extraction 
import Extraction_teledeclarations_non_soldes from './Extraction_teledeclarations_non_soldes';
import Extraction_TNI from './Extraction_TNI';
import Extraction_listing_employeurs from './Extraction_listing_employeurs';
import Extraction_encaissement_employeurs from './Extraction_encaissement_employeurs';
import Extraction_telepaiements from './Extraction_telepaiements';
import Extraction_employeurs_non_declarants from './Extraction_employeurs_non_declarants';
import Ecriture_en_debit_en_credit_employeurs from './Ecriture_en_debit_en_credit_employeurs';
import Extraction_segmentation_detaillees from './Extraction_segmentation_detaillees';
import Employeur_ayant_teledeclare_sans_contrepartie_credit from './Employeur_ayant_teledeclare_sans_contrepartie_credit';
import Declarations_effectuees_au_litre_un_mois_non_encore_soldees from './Declarations_effectuees_au_litre_un_mois_non_encore_soldees';
import Creances_nees_controles_non_encore_soldees from './Creances_nees_controles_non_encore_soldees';
import Extraction_assures_volontaires from './Extraction_assures_volontaires';
import Extraction_assures from './Extraction_assures';


// ETATS PAIEMENT

import Variation_actifs from './Variation_actifs';
import Variation_Especes from './Variation_Especes';
import Variation_Vires_Banques from './Variation_Vires_Banques';
import Variation_Vires_Cooperatives from './Variation_Vires_Cooperatives';
import Brouillard_Vires_Banques from './Brouillard_Vires_Banques';
import Brouillard_Vires_Microfinances from './Brouillard_Vires_Microfinances';
import Recapitulatif_Brouillard_Vires from './Recapitulatif_Brouillard_Vires';
import Brouillard_paiement_par_carte_bancaire from './Brouillard_paiement_par_carte_bancaire';
import Brouillard_Expatries from './Brouillard_Expatries';
import Brouillard_virement_hebdo_banques from './Brouillard_virement_hebdo_banques';
import Recapitulatif_vires_hebdo from './Recapitulatif_vires_hebdo';
import Brouillard_retenus_par_motif_par_banques from './Brouillard_retenus_par_motif_par_banques';
import Brouillard_retenues_par_motif_par_cooperatives from './Brouillard_retenues_par_motif_par_cooperatives';
import Paiement_especes_par_sites_guichets from './paiement_especes_par_sites_guichets';
import Paiement_Vires_par_Banques from './Paiement_Vires_par_Banques';
import Paiement_par_Cooperatives from './Paiement_par_Cooperatives';
import Statistiques_paiment_prestations from './Statistiques_paiment_prestations';
import Paiement_vires_expatries from './Paiement_vires_expatries';
import Recapitulatif_definitif_vires_hebdo from './Recapitulatif_definitif_vires_hebdo';
import Listing_elements_variables_par_periode from './Listing_elements_variables_par_periode';
import Liste_retenues_par_motif_parcooperative from './Liste_retenues_par_motif_parcooperative';
import Bordereaux_Caisses from './Bordereaux_Caisses';
import Bordereaux_Employeurs from './Bordereaux_Employeurs';


import Modifier_mot_de_passe from './Modifier_mot_de_passe';
import Historique_de_connexion from './Historique_de_connexion';
import Situation_dossier from './Situation_dossier';
import Dossier_en_ligne from './Dossier_en_ligne';

const MainContainer = ({navSideData}) => {
    const [container,setContainer] = useState();
    const handleDisplayContainer = ()=>{
        if (container === 'Paiement a la caisse') {
            console.log(container)
            return <Statistiques_paiement_a_la_caisse/>
        } else if(container === "Des droits rattaches a un assure"){
            return <Consultation_des_droits_rattaches_a_un_assure/>
        }
        else if(container === "Traiter via la GED-LAD"){
            return <Nombre_dossiers_traites_via_GED_LAD/>
        }
        else if(container === "Par nature prestations"){
            return <Nombre_Dossiers_Par_Nature_Prestations/>
        }
        else if(container === "(avec statut)par nature prestation"){
            return <Nombre_Dossiers_Avec_Statut_Par_Nature_Prestations/>
        }
        else if(container === "GTEC"){
            return <Historique_paiement_GTEC/>
        }
        else if(container === "Sapelli paiement"){
            return <Historique_paiement_Sapelli_paiement/>
        }
        else if(container === "Energizer"){
            return <Historique_paiement_ENERGIZER/>
        }
        else if(container === "Des photos rattaches par centre"){
            return <Statistiques_photos_rattachees_par_centre/>
        }
        else if(container === "Paiement dossier par beneficiaires et rubriques"){
            return <Stat_paiement_dossier_beneficiaire_rubrique/>
        }
        else if(container === "Des paiement des natures de prestation et par mode de paiement"){
            return <Statistiques_paiments_nature_prestation_et_mode_paiement/>
        }
        else if(container === "Des paiement immediat par CPS"){
            return <Statistiques_paiements_immediats_par_CPS/>
        }
        else if(container === "Activite"){
            return <Statistiques_activites/>
        }
        else if(container === "Corbeille par agent et par situation"){
            return <Consultation_corbeille_par_agent_et_situation/>
        }
        else if(container === "Utilisateurs(Evaluation a froid)"){
            return <Activites_utilisateurs/>
        }
        else if(container === "Duree de traitement Dossiers"){
            return <Statistiques_duree_traitement_des_dossiers/>
        }
        else if(container === "Depenses Ordonancees en prestations"){
            return <Depenses_ordonnancees_prestations/>
        }
        else if(container === "Ecritures en debits et en creditrs des employeurs"){
            return <Ecriture_en_debit_en_credit_employeurs/>
        }
        else if(container === "Liste Des dossiers AT/MP"){
            return <Liste_dossiers_ATMP/>
        }
        else if(container === "Employeur"){
            return <Consultation_employeur/>
        }
        else if(container === "Des controles realises"){
            return <Consultation_controles_realises/>
        }
        else if(container === "Des corbeilles des controleurs"){
            return <Consultation_corbeilles_controleur/>
        }
        else if(container === "Des encaissement en provenance des banques"){
            return <Consultation_encaissements_en_provenance_banques/>
        }
        else if(container === "Des encaissement par branche de prestation"){
            return <Consultation_encaissments_par_branche_prestation/>
        }
        else if(container === "Des statistique par CPS des APS et Quitus"){
            return <Consultation_statistiques_par_cps_des_aps_et_quitus/>
        }
        else if(container === "Des Boordereaux d'edition des APS"){
            return <Consultation_bordereaux_edition_APS/>
        }
        else if(container === "Transfert employeur"){
            return <Consultation_transfert_employeur/>
        }
        else if(container === "Des encaissement employeur"){
            return <Consultation_encaissments_employeur/>
        }
        else if(container === "Des taux de mobilite/listing des nomades"){
            return <Consultation_taux_mobilite/>
        }
        else if(container === "Generale des controles par periode"){
            return <Statistiques_generales_des_controles_par_periode/>
        }
        else if(container === "Des encaissement par centre et par par periode"){
            return <Statistique_encaissements_par_centre_par_periode/>
        }
        else if(container === "Immatriculation par periode"){
            return <Statistiques_immatriculation_par_periode/>
        }
        else if(container === "Saisies des encaissements par utilisateur et par centre"){
            return <Statistiques_saisies_encaissements_par_utilisateur_et_par_centre/>
        }
        else if(container === "suivi assainissement compte employeur"){
            return <Statistique_suivi_assainissement_compte_employeur/>
        }
        else if(container === "sur les mises en demeure de declarer"){
            return <Statistiques_sur_mises_en_demeures_declares/>
        }
        else if(container === "Des validation des ecritures"){
            return <Statistiques_validations_ecritures/>
        }
        else if(container === "Des compte a une date donnee"){
            return <Balance_comptes_a_une_date_donnee/>
        }
        else if(container === "Courante des comptes avec totaux en CP/PR/MR"){
            return <Balance_courante_comptes_avec_totaux_en_CPPRMR/>
        }
        else if(container === "Globale par centre"){
            return <Balance_globale_par_centre/>
        }
        else if(container === "Des employeurs"){
            return
        }
        else if(container === "BE non Execute"){
            return <Listing_BE_non_execute/>
        }
        else if(container === "Des encaissements en attente"){
            return <Listing_encaissements_en_attente/>
        }
        else if(container === "Des quittances"){
            return <Listing_quittance/>
        }
        else if(container === "Mises en demeur"){
            return
        }
        else if(container === "Des controles ordonnances et realises(Extension)"){
            return
        }
        else if(container === "Situation Debitrice employeur"){
            return <Situation_debitrice_employeurs/>
        }
        else if(container === "Suivi des teledeclarations employeurs"){
            return <Suivi_des_teledeclarations_employeurs/>
        }
        else if(container === "Solde des comptes au mois le mois"){
            return <Solde_des_comptes_au_mois_le_mois/>
        }
        else if(container === "Journal des mouvements"){
            return <Journal_des_mouvements/>
        }
        else if(container === "Production cotisation sociale"){
            return <Production_cotisations_sociales/>
        }
        else if(container === "E;ployeur actif n'ayant pas teledeclare au cour d'une periode"){
            return
        }
        else if(container === "Fiche signaletique complete"){
            return
        }
        else if(container === "Assure"){
            return <Consultation_assure/>
        }
        else if(container === "Compte individuel"){
            return <Consultation_compte_individuel/>
        }
        else if(container === "Transfert assure"){
            return <Consultation_transfert_assure/>
        }
        else if(container === "Reimputation"){
            return <Consultation_reimputation/>
        }
        else if(container === "Des ancaissement AV"){
            return <Consultation_encaissement_AV/>
        }
        else if(container === "Diverses modifications"){
            return <Consultation_diverses_modifications/>
        }
        else if(container === "Salaire par mois"){
            return <Etat_salaire_par_mois/>
        }
        else if(container === "Element liquidation"){
            return <Etat_elements_liquidation/>
        }
        else if(container === "De salaire d'un assure"){
            return <Etat_salaire_assure/>
        }
        else if(container === "Identifiant Unique"){
            return <Statistique_identifiant_unique/>
        }
        else if(container === "Des assures volontaires"){
            return <Statistique_assure_volontaire/>
        }
        else if(container === "AV"){
            return <Statistique_AV/>
        }
        else if(container === "Des dossiers en ligne"){
            return <Statistique_dossiers_en_ligne/>
        }
        else if(container === "Actifs"){
            return <Variation_actifs/>
        }
        else if(container === "Especes"){
            return <Variation_Especes/>
        }
        else if(container === "Vires Banques"){
            return <Variation_Vires_Banques/>
        }
        else if(container === "Vires Cooperatives"){
            return <Variation_Vires_Cooperatives/>
        }
        else if(container === "Des vires Microfinances"){
            return <Brouillard_Vires_Microfinances/>
        }
        else if(container === "Des paiement par carte Bancaire"){
            return <Brouillard_paiement_par_carte_bancaire/>
        }
        else if(container === "Des expatries"){
            return <Brouillard_Expatries/>
        }
        else if(container === "Virement Hepdo Banque"){
            return <Brouillard_virement_hebdo_banques/>
        }
        else if(container === "Des retenues par motifs et par Banque"){
            return <Brouillard_retenus_par_motif_par_banques/>
        }
        else if(container === "Des retenues par motif et par cooperative"){
            return <Brouillard_retenues_par_motif_par_cooperatives/>
        }
        else if(container === "Brouillard des vires"){
            return <Recapitulatif_Brouillard_Vires/>
        }
        else if(container === "Brouillard des vires hebdo"){
            return <Recapitulatif_vires_hebdo/>
        }
        else if(container === "De definitif des vires hebdo"){
            return <Recapitulatif_definitif_vires_hebdo/>
        }
        else if(container === "Especes par Site/Guichet"){
            return <Paiement_especes_par_sites_guichets/>
        }
        else if(container === "Vires par banque"){
            return <Paiement_Vires_par_Banques/>
        }
        else if(container === "Par cooperative"){
            return <Paiement_par_Cooperatives/>
        }
        else if(container === "Vires expatries"){
            return <Paiement_vires_expatries/>
        }
        else if(container === "caisse"){
            return <Bordereaux_Caisses/>
        }
        else if(container === "Employeur"){
            return <Bordereaux_Employeurs/>
        }
        else if(container === "Teledeclaration non soldes"){
            return <Extraction_teledeclarations_non_soldes/>
        }
        else if(container === "Des TNI"){
            return <Extraction_TNI/>
        }
        else if(container === "Du listing des employeurs"){
            return <Extraction_listing_employeurs/>
        }
        else if(container === "Encaissement employeurs"){
            return <Extraction_encaissement_employeurs/>
        }
        else if(container === "Des telepaiement"){
            return <Extraction_telepaiements/>
        }
        else if(container === "Des employeurs non declarants"){
            return <Extraction_employeurs_non_declarants/>
        }
        else if(container === "Segmentation detaillees"){
            return <Extraction_segmentation_detaillees/>
        }
        else if(container === "Employeur ayant teledeclare sans contrepartie de credit"){
            return <Employeur_ayant_teledeclare_sans_contrepartie_credit/>
        }
        else if(container === "Declarations effectuees au titre d'un mois et non encore soldees"){
            return <Declarations_effectuees_au_litre_un_mois_non_encore_soldees/>
        }
        else if(container === "Creances nees des controles non encore soldees"){
            return <Creances_nees_controles_non_encore_soldees/>
        }
        else if(container === "Des assures volontaires"){
            return <Extraction_assures_volontaires/>
        }
        else if(container === "Des Assures"){
            return <Extraction_assures/>
        }
        else if(container === "Des element variable par periode"){
            return <Listing_elements_variables_par_periode/>
        }
        else if(container === "Des retenues par motif et par cooperative"){
            return <Liste_retenues_par_motif_parcooperative/>
        }
        else{
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
