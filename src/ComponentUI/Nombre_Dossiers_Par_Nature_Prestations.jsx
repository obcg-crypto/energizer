import React from 'react';
import '../styles/Nombre_Dossiers_Par_Nature_Prestations.css';

const Nombre_Dossiers_Par_Nature_Prestations = () => {
    return (
        <div class="table-container">

            <h2 class="first-div">Nombre de Dossiers Par Nature de Prestations : CNPS SIEGE</h2>

            <div class="search-container">
                <select id="search-option">
                    <option value="dossier">Numéro dossier</option>
                    <option value="assure">Centre CNPS</option>
                    <option value="assure">Nature prestation (PVID,RP,PF,A,E)</option>
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
                        <th>Au Plus Tard Le </th>
                        <th>Nombre de Dossier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©1967-2010 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11 </p>
        </div>
    );
}

export default Nombre_Dossiers_Par_Nature_Prestations;
