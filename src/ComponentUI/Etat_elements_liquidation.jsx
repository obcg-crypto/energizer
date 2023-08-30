import React from 'react';
import '../styles/style_global.css';

const Etat_elements_liquidation = () => {
    return (
        <div class="table-container">

            <h1>Etat élément de liquidation</h1>

            <div class="footer-table">
                 <select>
                    <option value="dossier">N° Assuré</option>
                    <option value="assure">##</option>
                </select>
                <button class="cancel-button">Générer</button>
            </div>

            
            <h3>CNPS SIEGE : Element de liquidation de l'assuré N° : null</h3>

            <table>
                <thead>
                    <tr>
                        <th>N° Dossier</th>
                        <th>Nbr Mois Assurance</th>
                        <th>Nbre Mois Ass 10 Dern Année</th>
                        <th>RMM 36 Mois</th>
                        <th>RMM 60 Mois</th>
                        <th>RMM</th>
                        <th>Taux</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                    </tr>
                    <tr>  
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Etat_elements_liquidation;
