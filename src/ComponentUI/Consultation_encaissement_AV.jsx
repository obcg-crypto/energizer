import React from 'react';
import '../styles/style_global.css';

const Consultation_encaissement_AV = () => {
    return (
        <div>

            <h1>LISTE DES ENCAISSEMENTS AV AU : CNPS SIEGE, IMPRIME LE 00/00/00</h1>

            <table>
                <thead>
                    <tr>
                        <th>CPS DE</th>
                        <th>Début Période</th>
                        <th>Fin Période</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">centre Svp</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
                        </td>
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
                        <th></th>
                        <th>NUMERO ASSURE</th>
                        <th>NOM ASSURE</th>
                        <th>DATE PAIEMENT</th>
                        <th>DATE SAISIE</th>
                        <th>MONTANT</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>                    
                    </tr>
                </tbody>
            </table>


            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Consultation_encaissement_AV;
