import React from 'react';
import '../styles/style_global.css';
    
const Historique_de_connexion = () => {


    return (
        <div>
            
            <h1>HISTORIQUE DES CONNEXIONS : CNPS SIEGE</h1>

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
                        <th></th>
                        <th>Login</th>
                        <th>Nom et Prénom</th>
                        <th>Connecté Le</th>
                        <th>Déconnecté Le</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
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
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©1967-2010 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>

        </div>
    );
}

export default Historique_de_connexion;
