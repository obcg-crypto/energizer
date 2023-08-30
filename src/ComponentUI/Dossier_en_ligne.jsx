import React from 'react';
import '../styles/style_global.css';

const Dossier_en_ligne = () => {
    return (
        <div class="table-container">

            <h1>LISTE DES DOSSIERS DEPOSES EN LIGNE</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Type de dossier*</th>
                        <th>Matricule du client</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select id="search-option">
                                <option value="Matricule">Prestation</option>
                                <option value="#">###</option>
                            </select>
                        </td>
                        <td>
                            <input type="text" placeholder="Matricule du client" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Charger</button>
            </div>

            <h3>Résultat de recherche</h3>

            <table>
                <thead>
                    <tr>
                        <th>N° Dossier en ligne</th>
                        <th>Matricule</th>
                        <th>Requerant</th>
                        <th>Prestation</th>
                        <th>CPS Prefere</th>
                        <th>N° Dossier CNPS</th>
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
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 3</td>
                    </tr>
                </tbody>
            </table>

            
            <div>
                <input type="text" name="" id="" placeholder='Code télé-enregistrement'/>
                <input type="text" name="" id="" placeholder='Centre de gestion actuel'/>
                <input type="text" name="" id="" placeholder='CPS de preference'/>
                <input type="text" name="" id="" placeholder='Matricule'/>
                <input type="text" name="" id="" placeholder='Nom requerant'/>
                <input type="text" name="" id="" placeholder='Prestation Demandee'/>
                <input type="text" name="" id="" placeholder='Employeur'/>
                <input type="text" name="" id="" placeholder='Date de signature par employeur'/>
                <input type="text" name="" id="" placeholder='Date dépot dossier'/>
                <input type="text" name="" id="" placeholder='Adresse'/>
                <input type="text" name="" id="" placeholder='Email'/>
                <input type="text" name="" id="" placeholder='Téléphone'/>
                <br />
                <button class="cancel-button">Receptionner</button>
                <button class="cancel-button">Afficher pieces jointes</button>
            </div>


        </div>
    );
}

export default Dossier_en_ligne;
