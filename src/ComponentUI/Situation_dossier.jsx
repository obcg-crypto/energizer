import React from 'react';
import '../styles/style_global.css';
    
const Situation_dossier = () => {


    return (
        <div>
            
            <h1>CONSULTATION SITUATION DOSSIER</h1>

            <div class="search-container">
                <select id="search-option">
                    <option value="1">Choisir un critère</option>
                    <option value="2">#</option>
                </select>

                <div class="search-range">
                    <input type="date" placeholder="Valeur de Début" />
                    <span>à</span>
                    <input type="date" placeholder="Valeur de Fin" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">Rechercher</button>
                    <button class="cancel-button">Annuler</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Etat</th>
                        <th>N° Dossier</th>
                        <th>N° Assuré</th>
                        <th>Nom Requerant</th>
                        <th>Objet</th>
                        <th>Etape</th>
                        <th>Destinataire</th>
                        <th>Date Enregistrement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©1967-2010 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>

        </div>
    );
}

export default Situation_dossier;
