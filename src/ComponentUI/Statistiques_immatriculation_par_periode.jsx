import React from 'react';
import '../styles/style_global.css';

const Statistiques_immatriculation_par_periode = () => {
    return (
        <div>

            <h1>Statistique des immatriculations par centre</h1>

            <table>
                <thead>
                    <tr>
                        <th>Critère de recherche</th>
                        <th>Valeur de début</th>
                        <th>Valeur de fin</th>
                        <th>Assuré</th>
                        <th>Employeur</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">Période d'immatriculation</option>
                                <option value="doualaBonanjo">###</option>
                            </select>
                        </td>
                        <td>
                            <input type="date" name="" id="" placeholder='Début période'/>
                        </td>
                        <td>
                            <input type="date" name="" id="" placeholder='Fin période'/>
                        </td>
                        <td>
                            <input type="radio" name="" id="" />
                        </td>
                        <td>
                            <input type="radio" name="" id="" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Rechercher</button>
            </div>

            <h3>Résultat de recherche</h3>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Code centre</th>
                        <th>Nom centre</th>
                        <th>Nombre d'immatriculations</th>
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
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>
        </div>
    );
}

export default Statistiques_immatriculation_par_periode;
