import React from 'react';
import '../styles/style_global.css';

const Liste_assure_volontaire = () => {
    return (
        <div>

            <h1>LISTE DES ASSURES VOLONTAIRES</h1>

            <table>
                <thead>
                    <tr>
                        <th>Etat</th>
                        <th>Période du</th>
                        <th>au</th>
                        <th>au CPS</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">Nouvelles affiliations</option>
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
                            <option value="centreSvp">140</option>
                            <option value="#">#</option>                            
                        </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Rechercher</button>
                <button class="cancel-button">Annuler</button>
            </div>

            <h3>RESULTAT DE LA RECHERCHE : NULL</h3>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>CPS</th>
                        <th>Matricule</th>
                        <th>Noms et prénoms</th>
                        <th>Date de naissance</th>
                        <th>Date affiliation générale</th>
                        <th>Numéro contrat</th>
                        <th>Date effet contrat</th>
                        <th>Date notification</th>
                        <th>Téléphone</th>
                        <th>Mail</th>
                        <th>Mois payés</th>
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
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
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
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>
                        <td>Donnée 4</td>                    
                    </tr>
                </tbody>
            </table>


            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Liste_assure_volontaire;
