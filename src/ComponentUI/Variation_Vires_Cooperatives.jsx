import React from 'react';
import '../styles/style_global.css';
import Modal from './Modal';

const Variation_Vires_Cooperatives = () => {

    return (
        <div>

            <Modal />

            <h1>BIRT Report Viewer</h1>

            <div class="button-container">
                <button class="cancel-button">Toggle table</button>
                <button class="cancel-button">Run report</button>
                <button class="cancel-button">Export data</button>
                <button class="cancel-button">Export report</button>
                <button class="cancel-button">Print report</button>
                <button class="cancel-button">Print server</button>
            </div>


            <h3>BROUILLARD DES VIRES COOPERATIVES. ETAT DES VARIATIONS DU : 12 PAR RAPPORT AU 12</h3>

            <div class="paragraph">
                <p class="paragraph-child">Centre: 12-</p>
                <p class="paragraph-child">Date Edition : 2023-08-02 10:00:00:00</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>N° Assure</th>
                        <th>N° Attr</th>
                        <th>NOMS ATTRIBUTAIRE</th>
                        <th>Droit Nominal</th>
                        <th>Mois/Trimestre Antérieur</th>
                        <th>Mois/Trimestre Actuel</th>
                        <th>Diff</th>
                        <th>Observations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Donnée 1</td>
                        <td>Total Attributaire</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 7</td>
                        <td>Donnée 8</td>
                        <td>Donnée 9</td>
                    </tr>
                </tbody>
            </table>
            <p>2 aout 2023 10:55</p>
        </div>
    );
}

export default Variation_Vires_Cooperatives;
