import React from 'react';
import '../styles/style_global.css';

const Listing_elements_variables_par_periode = () => {
    return (
        <div>
            <h1>LISTING DES ELEMENTS VARIABLES GENERES AU COURS DE LA PERIODE DU null</h1>
           
            <table>
                <thead>
                    <tr>
                        <th>Tpes de Génération</th>
                        <th>Mode de paiement</th>
                        <th>Période</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">BROUILLARD</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">VIRE</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
                        </td>
                        <td>
                            <div class="search-range">
                                <input type="date" placeholder="Période" />
                            </div>
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
                        <th>N°</th>
                        <th>N° Assure</th>
                        <th>N° Benef</th>
                        <th>Noms et Prenoms</th>
                        <th>Rappel</th>
                        <th>Regul plus</th>
                        <th>Regul moins</th>
                        <th>Mode paiement</th>
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
                        <td>Donnée 7</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 7</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Listing_elements_variables_par_periode;
