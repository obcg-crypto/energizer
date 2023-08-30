import React from 'react';
import '../styles/style_global.css';

const Extraction_telepaiements = () => {
    return (
        <div>

            <h1>ETAT DES TELEPAIEMENTS</h1>

            <table>
                <thead>
                    <tr>
                        <th>Date début</th>
                        <th>Date fin</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="date" name="" id="" placeholder='Date début'/>
                        </td>
                        <td>
                            <input type="date" name="" id="" placeholder='Date fin'/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Rechercher</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Mois</th>
                        <th>Motif</th>
                        <th>Effectif</th>
                        <th>Montant</th>
                        <th>co...</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
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

export default Extraction_telepaiements;