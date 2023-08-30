import React from 'react';
import '../styles/style_global.css';

const Suivi_des_dossiers = () => {
    return (
        <div class="table-container">
            <h1>Suivi des dossiers</h1>
            <div class="search-container">
                <select id="search-option">
                    <option value="dossier">N° Dossier</option>
                    <option value="assure">N° Assuré</option>
                </select>
                <div class="search-range">
                    <input type="text" placeholder="Valeur de début" />
                    <span>à</span>
                    <input type="text" placeholder="Valeur de fin" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">Rechercher</button>
                    <button class="cancel-button">Annuler</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>N° dossier</th>
                        <th>N° assuré</th>
                        <th>Etat</th>
                        <th>Etape</th>
                        <th>Centre</th>
                        <th>Nom et prenom demandeur</th>
                        <th>Expéditeur</th>
                        <th>Destinataire</th>
                        <th>Date d'expédition</th>
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
                        <td>Donnée 9</td>
                        <td>Donnée 10</td>
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
                        <td>Donnée 9</td>
                        <td>Donnée 10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 7</td>
                        <td>Donnée 8</td>
                        <td>Donnée 9</td>
                        <td>Donnée 10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Suivi_des_dossiers;
