import React from 'react';
import '../styles/style_global.css';

const Consultation_corbeilles_controleur = () => {
    return (
        <div>
            <h1>LISTING DES CONTROLES EN INSTANCE DANS LES CORBEILLES/RETRAIT DES CONTROLES AUX CONTROLEURS</h1>
           
            <table>
                <thead>
                    <tr>
                        <th>Matricule</th>
                        <th>Controleur</th>
                        <th>Début période</th>
                        <th>Fin période</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" name="" id="" placeholder='matricule'/>
                        </td>
                        <td>
                        <select id="search-option">
                                <option value="centreSvp">Choix</option>
                                <option value="doualaBonanjo">###</option>
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
                        <th>N° ORDRE</th>
                        <th>MATRICULE</th>
                        <th>RAISON SOCIALE</th>
                        <th>N° DMDE</th>
                        <th>FACTEUR DECLENCHANT</th>
                        <th>ORDONNATEUR</th>
                        <th>PERIODE DEBUT</th>
                        <th>PERIODE FIN</th>
                        <th>CENTRE</th>
                        <th>CONTROLEUR DESIGNE</th>
                        <th>DATE ORDONNANCEMENT</th>
                        <th>RETIRER LE CONTROLE ?</th>
                        <th>MOTIF RETRAIT</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Consultation_corbeilles_controleur;
