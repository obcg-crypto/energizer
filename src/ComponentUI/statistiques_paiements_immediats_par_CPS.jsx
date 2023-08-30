import React from 'react';
import '../styles/style_global.css';
    
const statistiques_paiements_immediats_par_CPS = () => {


    return (
        <div>
            
            <h1>Statistiques des paiements immediats par CPS et par branche des prestations sociales</h1>

            <div class="search-container">
                <div class="search-range">
                    <input type="date" placeholder="Début période" />
                    <span>à</span>
                    <input type="date" placeholder="Fin période" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">Rechercher</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Code Centre</th>
                        <th>Libellé CPS</th>
                        <th>Branche</th>
                        <th>Effectif</th>
                        <th>Montant</th>
                        <th>co...</th>
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
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                    </tr>
                </tbody>
            </table>
            <div class="button-container">
                <button class="cancel-button">Exporter</button>
            </div>


            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>
        </div>
    );
}

export default statistiques_paiements_immediats_par_CPS;
