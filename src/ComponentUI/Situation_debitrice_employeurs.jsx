import React from 'react';
import '../styles/style_global.css';

const Situation_debitrice_employeurs = () => {
    return (
        <div>
            <h1>Situation débitrice des comptes employeurs</h1>
            <div class="search-container">
                <div class="search-range">
                    <input type="text" placeholder="Matricule" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">globale</button>
                    <button class="cancel-button">Mois le mois</button>
                    <button class="cancel-button">Grand livre</button>

                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Matricule</th>
                        <th>Raison sociale</th>
                        <th>Date d'effet</th>
                        <th>Solde</th>
                        <th>Mois Ecoulé</th>
                        <th>Mois déclaré</th>
                        <th>Mois non déclaré</th>
                        <th>Situation</th>
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

export default Situation_debitrice_employeurs;
