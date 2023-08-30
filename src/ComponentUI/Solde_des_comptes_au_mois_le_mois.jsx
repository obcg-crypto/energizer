import React from 'react';
import '../styles/style_global.css';

const Solde_des_comptes_au_mois_le_mois = () => {
    return (
        <div>
            <h1>Soldes par période de cotisation et par employeur</h1>
           
            <table>
                <thead>
                    <tr>
                        <th>Matricule</th>
                        <th>Mois</th>
                        <th>Annee</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="search-range">
                                <input type="text" placeholder="Matricule" />
                            </div>
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">Choix</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">Choix</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Charger</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ORDRE</th>
                        <th>Matricule</th>
                        <th>Raison sociale</th>
                        <th>Mois</th>
                        <th>Annee</th>
                        <th>DEBIT</th>
                        <th>CREDIT</th>
                        <th>SOLDE</th>
                        <th>SOLDE CUMULE</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 7</td>
                        <td>Donnée 8</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 7</td>
                        <td>Donnée 8</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Solde_des_comptes_au_mois_le_mois;
