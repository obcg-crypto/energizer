import React from 'react';
import '../styles/style_global.css';

const Consultation_compte_individuel = () => {
    return (
        <div class="table-container">

            <h1>CONSULTATION DU COMPTE INDIVIDUEL D'UN TRAVAILLEUR</h1>
            
            <table class="first-div">
                <thead>
                    <tr>
                        <th>Matricule assuré</th>
                        <th>Matricule employeur</th>
                        <th>Matricule interne</th>
                        <th>Année</th>
                        <th>Mois</th>
                        <th>Choix consultation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" placeholder="Matricule assuré" />
                        </td>
                        <td>
                            <input type="text" placeholder="Matricule employeur" />
                        </td>
                        <td>
                            <input type="text" placeholder="Matricule interne" />
                        </td>
                        <td>
                            <input type="text" placeholder="Année" />
                        </td>
                        <td>
                            <input type="text" placeholder="Mois" />
                        </td>
                        
                        <td>
                            <select id="search-option">
                                <option value="Matricule">Totalité</option>
                                <option value="#">###</option>
                            </select>
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
                        <th>Matricule</th>
                        <th>Nom et prenom</th>
                        <th>Né le</th>
                        <th>Matricule Employeur Denomination Sociale</th>
                        <th>Matricule interne</th>
                        <th>Mois de travail</th>
                        <th>Nombre jour</th>
                        <th>Salaire brute</th>
                        <th>Salaire cotisable</th>
                        <th>Salaire Exceptionnel</th>
                        <th>Saisie manuelle</th>
                        <th>Date enregistrement</th>
                        <th>Date nom déclaration</th>
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
                        <td>Donnée 3</td>
                        <td>Donnée 3</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Consultation_compte_individuel;
