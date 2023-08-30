import React from 'react';
import '../styles/style_global.css';

const Nombre_Dossiers_Avec_Statut_Par_Nature_Prestations = () => {
    return (
        <div class="table-container">

            <h1>Nombre de Dossiers (Avec Statut) Par Nature de Prestations : CNPS SIEGE</h1>

            <div class="search-container">
                <select id="search-option">
                    <option value="dossier">Date Enregistrement</option>
                    <option value="assure">Centre CNPS</option>
                </select>
                <div class="search-range">
                    <input type="text" placeholder="Valeur de début" />
                    <span>à</span>
                    <input type="text" placeholder="Valeur de fin" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">Rechercher</button>
                    <button class="cancel-button">Annuler</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Centres CNPS</th>
                        <th>Nature de la Prestation</th>
                        <th>Statut du Dossier</th>
                        <th>Au Plus Tard Le</th>
                        <th>Nombre de Dossier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Nombre_Dossiers_Avec_Statut_Par_Nature_Prestations;
