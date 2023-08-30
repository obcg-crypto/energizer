import React from 'react';
import '../styles/style_global.css';
import Modal from './Modal';

const Recapitulatif_definitif_vires_hebdo = () => {

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


            <h3>VIREMENT HEBDOMADAIRE TABLEAU RECAPITULATIF DES PAIEMENTS PAR ETABLISSEMENTS FINANCIERS</h3>

            <div class="paragraph">
                <p class="paragraph-child">Centre: 13</p>
                <p class="paragraph-child">Date Edition : null</p>
                <p class="paragraph-child">Periode : null</p>
                <p class="paragraph-child">Semaine N° : null</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Cooperatives</th>
                        <th></th>
                        <th>Effectifs PVID</th>
                        <th>Montant PVID</th>
                        <th>Effectif RP</th>
                        <th>Montant RP</th>
                        <th>Effectif AF</th>
                        <th>Montant AF</th>
                        <th>Net à payer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Donnée 1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 7</td>
                        <td>Donnée 8</td>
                        <td>Donnée 9</td>
                        <td>Donnée 1°</td>
                        <td>Donnée 11</td>
                    </tr>
                </tbody>
            </table>
            <p>2 aout 2023 10:55</p>
        </div>
    );
}

export default Recapitulatif_definitif_vires_hebdo;
