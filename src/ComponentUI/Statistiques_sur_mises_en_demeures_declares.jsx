import React from 'react';
import '../styles/style_global.css';

const Statistiques_sur_mises_en_demeures_declares = () => {
    return (
        <div>
            <h1>Statistiques de notification des mises en demeure de déclarer</h1>

            <table>
                <thead>
                    <tr>
                        <th>Période(s) de cotisation concernée</th>
                        <th>Période(s) des saisies des notifications</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="number" name="" id="" placeholder='début période' />
                        </td>
                        <td>
                            <input type="number" name="" id="" placeholder='début période' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="number" name="" id="" placeholder='fin période' />
                        </td>
                        <td>
                            <input type="number" name="" id="" placeholder='fin période' />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Rechercher</button>
                <button class="cancel-button">Annuler</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>CODE CENTRE</th>
                        <th>CENTRE DE PREVOYANCE SOCIALE</th>
                        <th>MISES EN DEMEURE CREES</th>
                        <th>MISES EN DEMEURE NOTIFIES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>   </div>
    );
}

export default Statistiques_sur_mises_en_demeures_declares;
