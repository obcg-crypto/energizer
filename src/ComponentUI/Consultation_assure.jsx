import React from 'react';
import '../styles/style_global.css';

const Consultation_assure = () => {
    return (
        <div class="table-container">

            <h1>Rechercher un assuré social</h1>
            
            <table class="first-div">
                <thead>
                    <tr>
                        <th>Critere de recherche</th>
                        <th>Période de Début</th>
                        <th>Période de Fin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select id="search-option">
                                <option value="Matricule">Matricule</option>
                                <option value="#">###</option>
                            </select>
                        </td>
                        <td>
                            <input type="text" placeholder="Valeur de début" />
                        </td>
                        <td>
                            <input type="text" placeholder="Valeur de fin" />
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
                        <th>N° </th>
                        <th>REGIME ACTUEL</th>
                        <th>Matricule</th>
                        <th>Nom et prenom</th>
                        <th>Né le</th>
                        <th>Né à</th>
                        <th>pere</th>
                        <th>Mere</th>
                        <th>Centre</th>
                        <th>Choisir</th>
                        <th>QRCODE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
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
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                    </tr>
                </tbody>
            </table>

            
            <div class="footer-table">
                <button class="cancel-button">Consulter</button>
                <select>
                    <option value="dossier">Choisir un état</option>
                    <option value="assure">N° Assuré</option>
                </select>
                <button class="cancel-button">Afficher l'état</button>
                <button class="cancel-button">Tout décocher</button>
            </div>


        </div>
    );
}

export default Consultation_assure;
