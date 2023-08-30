import React from 'react';
import '../styles/style_global.css';

const Historique_paiement_ENERGIZER = () => {
    return (
        <div>

            <h1>CONSULTATION DES HISTORIQUES DE PAIEMENTS SAPELLI ENERGIZER</h1>

            <div class="search-container">
                <select id="search-option">
                    <option value="dossier">MATRICULE ASSURE PRINCIPAL</option>
                    <option value="assure">###</option>
                </select>
                <div class="search-range">
                    <input type="text" placeholder="Valeur" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">Charger</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ORDRE</th>
                        <th>Numéro Assuré</th>
                        <th>Numéro Attributaire</th>
                        <th>Noms et prénoms</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                    </tr>

                    
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Historique_paiement_ENERGIZER;
