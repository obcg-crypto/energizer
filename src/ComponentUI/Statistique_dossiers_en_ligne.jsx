import React from 'react';
import '../styles/style_global.css';

const Statistique_dossiers_en_ligne = () => {
    return (
        <div>

            <h1>ETAT DE GESTION DOSSIERS DEPOSES EN LIGNE</h1>

            <table>
                <thead>
                    <tr>
                        <th>Etat</th>
                        <th>Période du</th>
                        <th>Au</th>
                        <th>Structure</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">télé-immatriculation employeur</option>
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
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">CPS de BAMENDA</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Rechercher</button>
                <button class="cancel-button">Annuler</button>
            </div>

            <h3>STATISTIQUE DES TELE-IMMATRICULATIONS EMPLOYEUR PAR CENTRE DU : null AU null</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Centre</th>
                        <th>Dossiers recus</th>
                        <th>Dossiers traités</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Total global</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>                  
                    </tr>
                </tbody>
            </table>


            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Statistique_dossiers_en_ligne;
