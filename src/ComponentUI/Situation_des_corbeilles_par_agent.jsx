import React from 'react';
import '../styles/style_global.css';

const Situation_des_corbeilles_par_agent = () => {
    return (
        <div>

            <h1>Nombre de Dossiers Par Corbeille : CNPS SIEGE</h1>

            <div class="search-container">
                <select id="search-option">
                    <option value="dossier">Code centre</option>
                    <option value="assure">###</option>
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
                        <th>Corbeille</th>
                        <th>Nombre de Dossier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Situation_des_corbeilles_par_agent;
