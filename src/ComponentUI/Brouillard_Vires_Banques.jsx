import React from 'react';
import '../styles/style_global.css';

const Brouillard_Vires_Banques = () => {
    return (
        <div>

            <h1>STATISTIQUES TRAITEMENTS DES DOSSIERS PAR UTILISATEUR AU : CNPS SIEGE</h1>

            <div class="search-container">
                <select id="search-option">
                    <option value="dossier">Choisir une branche</option>
                    <option value="assure">###</option>
                </select>
                <div class="search-range">
                    <input type="date" placeholder="Valeur de début" />
                    <span>à</span>
                    <input type="date" placeholder="Valeur de fin" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">Rechercher</button>
                    <button class="cancel-button">Annuler</button>
                </div>
            </div>


            <h3>ACTIVITE DE L'UTILISATEUR : null DU null AU null</h3>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>N Dossier</th>
                        <th>Objet</th>
                        <th>Num Assu</th>
                        <th>Requerrant</th>
                        <th>Situation Actuelle</th>
                        <th>Date Situ</th>
                        <th>Localisation Actuelle</th>
                        <th>Expéditeur</th>
                        <th>Date Reception</th>
                        <th>Position Reception</th>
                        <th>Action A Realiser</th>
                        <th>Destinataire</th>
                        <th>Date Envoie</th>
                        <th>Position Envoie</th>
                        <th>Action Realisee</th>
                        <th>Durée traitement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Brouillard_Vires_Banques;
