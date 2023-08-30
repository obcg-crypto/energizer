import React from 'react';
import '../styles/style_global.css';
import Modal from './Modal';

const Paiement_vires_expatries = () => {

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



            <h3>LISTING DE TRANSMISSION DES VIREMENTS DES PRESTATIONS SOCIALES DES EXPATRIES</h3>

            <div class="paragraph">
                <p class="paragraph-child">Centre: 13</p>
                <p class="paragraph-child">Mois : 2023-08-02 10:00:00:00</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>N° Assure</th>
                        <th>N° Attr</th>
                        <th>NOMS ATTRIBUTAIRE</th>
                        <th>AG.</th>
                        <th>N°CPT</th>
                        <th>RIB</th>
                        <th>CODE IBAN</th>
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
                    </tr>
                </tbody>
            </table>
            <p>2 aout 2023 10:55</p>
        </div>
    );
}

export default Paiement_vires_expatries;
