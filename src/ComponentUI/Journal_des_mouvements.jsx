import React from 'react';
import '../styles/style_global.css';

const Journal_des_mouvements = () => {
    return (
        <div>
            <h1>LISTING DES OPERATIONS DANS LES COMPTES EMPLOYEURS</h1>
           
            <table>
                <thead>
                    <tr>
                        <th>Matricule</th>
                        <th>Mois</th>
                        <th>Annee</th>
                        <th>Décompteur</th>
                        <th>Date opération</th>
                        <th>Objet</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="search-range">
                                <input type="text" placeholder="Matricule" />
                            </div>
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">Choix</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">Choix</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">Choix</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
                        </td>
                        <td>
                            <input type="date" name="" id="" />
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">Choix</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
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
                        <th>Matricule</th>
                        <th>Raison sociale</th>
                        <th>Nature</th>
                        <th>Motif</th>
                        <th>Montant</th>
                        <th>Année</th>
                        <th>Mois</th>
                        <th>Date de saisie</th>
                        <th>Date valeur</th>
                        <th>Agent</th>
                        <th>Sens</th>
                        <th>CPS de Compta</th>
                        <th>N° Rapport</th>
                        <th>Début période</th>
                        <th>Fin période</th>
                        <th>Date controle</th>
                        <th>Date notif Med</th>
                        <th>Controleur(s)</th>
                        <th>Observation</th>
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
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>

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
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        <td>Donnée 8</td>
                        
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Journal_des_mouvements;
