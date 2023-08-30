import React from 'react';
import '../styles/style_global.css';

const Statistiques_validations_ecritures = () => {
    return (
        <div>
            <h1>Statistiques de validation des écritures</h1>

            <table>
                <thead>
                    <tr>
                        <th>Critère</th>
                        <th>Début Période</th>
                        <th>Fin Période</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <select id="search-option">
                                <option value="VALIDATION DEBIT">VALIDATION DEBIT</option>
                                <option value="#">###</option>
                            </select>
                       
                        </td>
                        <td>
                            <input type="number" name="" id="" placeholder='début période' />
                        </td>
                        <td>
                            <input type="number" name="" id="" placeholder='début période' />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Charger</button>
            </div>

            <h3>VALIDATION DEBIT PERIODE DU null AU null</h3>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>REGION</th>
                        <th>CENTRE</th>
                        <th>TOTAL DES SAISIES</th>
                        <th>TOTAL DES VALIDATIONS</th>
                        <th>EFFECTIF EMPLOYEUR SAISI</th>
                        <th>EFFECTIF EMPLOYEUR VALIDE</th>
                        <th>MONTANT TOTAL SAISIES</th>
                        <th>MONTANT TOTAL VALIDE</th>
                        <th>MONTANT EN ATTENTE DE VALIDATION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 7</td>
                        <td>Donnée 8</td>
                        <td>Donnée 9</td>
                        <td>Donnée 10</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 7</td>
                        <td>Donnée 8</td>
                        <td>Donnée 9</td>
                        <td>Donnée 10</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>        </div>
    );
}

export default Statistiques_validations_ecritures;
