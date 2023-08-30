import React from 'react';
import '../styles/style_global.css';

const Statistique_suivi_assainissement_compte_employeur = () => {
    return (
        <div>
            <h1>CONSULTATION DES STATISTIQUES DE SAISIE DES DEBITS ET CREDITS DE COTISATION PAR CENTRE ET PAR PERIODE</h1>
           
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
                            <input type="number" name="" id="" placeholder='début période'/>
                        </td>
                        <td>
                            <input type="number" name="" id="" placeholder='fin période'/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Charger</button>
            </div>


            <h3>Statistiques générales des saisies au cours de la période allant du Au Imprimées le ###</h3>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>CENTRE</th>
                        <th>EMPLOYEURS DEBITES</th>
                        <th>NBR DE DEBITS</th>
                        <th>MONTANT TOTAL DEBITE</th>
                        <th>EMPLOYEURS CREDITES</th>
                        <th>NBR DE CREDITS</th>
                        <th>MONTANT TOTAL CREDITE</th>
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
                        <td>Donnée 6</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 6</td>                    
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Statistique_suivi_assainissement_compte_employeur;
