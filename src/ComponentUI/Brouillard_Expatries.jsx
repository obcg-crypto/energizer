import React from 'react';
import '../styles/style_global.css';
import Modal from './Modal';


const Brouillard_Expatries = () => {

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


            <h3>BROUILLARD VIREMENTS DES PRESTATIONS SOCIALES</h3>

            <div class="paragraph">
                <p class="paragraph-child">Centre: 12</p>
                <p class="paragraph-child">Mois : null</p>
                <p class="paragraph-child">Ref.Brouillard : null</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>N° Assure</th>
                        <th>N° Attr</th>
                        <th>NOMS ATTRIBUTAIRE</th>
                        <th>AG.</th>
                        <th>N° CPT</th>
                        <th>RIB</th>
                        <th>CODE IBAN</th>
                        <th>TPVID</th>
                        <th>TRP</th>
                        <th>REGUL(-)</th>
                        <th>REGUL(+)</th>
                        <th>Rappel</th>
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
                        <td>Donnée 9</td>
                        <td>Donnée 9</td>
                        <td>Donnée 9</td>
                        <td>Donnée 9</td>
                        <td>Donnée 9</td>
                    </tr>
                </tbody>
            </table>
            <p>2 aout 2023 10:55</p>
        </div>
    );
}

export default Brouillard_Expatries;
