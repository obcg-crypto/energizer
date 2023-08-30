import React from 'react';
import '../styles/style_global.css';

const Consultation_encaissments_par_branche_prestation = () => {
    return (
        <div>
            <h1>CONSULTATION DES STATISTIQUES PAR CENTRE DE DELIVRANCE DES QUITUS SOCIAUX ET APS AUX EMPLOEURS</h1>
           
            <table>
                <thead>
                    <tr>
                        <th>Début période</th>
                        <th>Fin période</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" name="" id="" placeholder='Début période'/>
                        </td>
                        <td>
                            <input type="text" name="" id="" placeholder='Fin période'/>
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
                        <th>CPS</th>
                        <th>QUANTITE APS</th>
                        <th>MONTANT APS</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                    </tr>
                </tbody>

                <thead>
                    <tr>
                        <th>ORDRE</th>
                        <th>CPS</th>
                        <th>QUANTITE QUITUS</th>
                        <th>MONTANT QUITUS</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                    </tr>
                </tbody>

            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Consultation_encaissments_par_branche_prestation;
