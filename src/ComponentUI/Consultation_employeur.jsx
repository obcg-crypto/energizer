import React from 'react';
import '../styles/style_global.css';

const Consultation_employeur = () => {
    return (
        <div>
            <h1>Rechercher un employeur</h1>
            
            <div class="search-container">
                <select id="search-option">
                    <option value="dossier">Matricule</option>
                    <option value="assure">N° Assuré</option>
                </select>
                <div class="search-range">
                    <input type="text" placeholder="Valeur de début" />
                    <span>à</span>
                    <input type="text" placeholder="Valeur de fin" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">Rechercher</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Centre</th>
                        <th>Matricule</th>
                        <th>Denomination sociale</th>
                        <th>Nom commercial</th>
                        <th>Type Employeur</th>
                        <th>Email</th>
                        <th>TEL</th>
                        <th>Ville</th>
                        <th>Immatriculé le</th>
                        <th>Nom du promoteur</th>
                        <th>choisir QRCODE</th>
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
                        <td>
                            <input type="radio" name="" id="" />
                        </td>
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
                        <td>
                            <input type="radio" name="" id="" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="footer-table">
                <button class="cancel-button">Consulter</button>
                <select id="search-option">
                    <option value="dossier">Choisir un état</option>
                    <option value="assure">N° Assuré</option>
                </select>
                <button class="cancel-button">Afficher l'état</button>
                <button class="cancel-button">Tout décocher</button>
            </div>

        </div>
    );
}

export default Consultation_employeur;
