import React from 'react';
import '../styles/style_global.css';

const Statistique_assure_volontaire = () => {
    return (
        <div>

            <h1>STATISTIQUES DES IMMATRICULATIONS ET AFFILIATIONS VOLONTAIRES PAR CENTRE</h1>


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
                    <button class="cancel-button">Rechercher</button>
            </div>

            <h3>Résultat</h3>


            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>CPS</th>
                        <th>Dossiers recus</th>
                        <th>Nouvelle Immas</th>
                        <th>Nouvelle Immas validés</th>
                        <th>Changement de régime</th>
                        <th>Changement de régime validés</th>
                        <th>Affiliations notifiées</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 6</td>
                    </tr>
                    <tr>
                        <td>Total</td>
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

export default Statistique_assure_volontaire;
