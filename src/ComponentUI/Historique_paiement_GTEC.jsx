import React from 'react';
import '../styles/style_global.css';

const Historique_paiement_GTEC = () => {
    return (
        <div>

            <h1>CONSULTATION DES HISTORIQUES DE PAIEMENTS GTEC</h1>

            <div class="search-container">
                <select id="search-option">
                    <option value="dossier">MATRICULE</option>
                    <option value="assure">###</option>
                </select>
                <div class="search-range">
                    <input type="text" placeholder="Valeur de début" />
                    <span>à</span>
                    <input type="text" placeholder="Valeur de fin" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">Charger</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ORDRE</th>
                        <th>Code Centre</th>
                        <th>Numéro Dossier</th>
                        <th>Numéro Assuré</th>
                        <th>Noms et Prénoms</th>
                        <th>Date de Naissance</th>
                        <th>Numéro Bénéficiaire</th>
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
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
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
                        <td>Donnée 3</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Historique_paiement_GTEC;
