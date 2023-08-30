import React from 'react';
import '../styles/style_global.css';

const Consultation_diverses_modifications = () => {
    return (
        <div>

            <h1>LISTE DES MODIFICATIONS</h1>

            <table>
                <thead>
                    <tr>
                        <th>Type client</th>
                        <th>Début de la période</th>
                        <th>Fin de la période</th>
                        <th>Matricule</th>
                        <th>Centre</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">Assuré</option>
                                <option value="centreSvp">Employeur</option>
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
                            <input type="text" name="" id="" placeholder='matricule'/>
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="centreSvp">CPS de BAMENDA</option>
                                <option value="centreSvp">#</option>
                                <option value="centreSvp">#</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Charger</button>
            </div>

            <h3>Résultat modification sur employeur</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Centre</th>
                        <th>Matricule</th>
                        <th>Dénomination sociale</th>
                        <th>Groupe risque</th>
                        <th>Regime</th>
                        <th>Date effet</th>
                        <th>Agent de modif</th>
                        <th>Date Opération</th>
                        <th>Version</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
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


            <h3>Résultat modification sur assuré 1</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Centre</th>
                        <th>Matricule</th>
                        <th>Nom complet</th>
                        <th>Date de naissance</th>
                        <th>Sexe</th>
                        <th>Date affiliation</th>
                        <th>Employeur</th>
                        <th>Agent de modif</th>
                        <th>Date Modification</th>
                        <th>Opération</th>
                        <th>Reference Modif</th>
                        <th>Version</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
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


            
            <h3>Résultat modification sur Attributaire</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Centre</th>
                        <th>Matricule</th>
                        <th>Code_Attrib</th>
                        <th>Nom complet</th>
                        <th>Date de naissance</th>
                        <th>Sexe</th>
                        <th>Mode</th>
                        <th>Info bancaires</th>
                        <th>Agent de modif</th>
                        <th>Date Opération</th>
                        <th>Version</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
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


            <h3>Résultat modification sur Bénéficiare</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Centre</th>
                        <th>Matricule</th>
                        <th>Code_Attrib</th>
                        <th>Code_Benef</th>
                        <th>Nom complet</th>
                        <th>Date de naissance</th>
                        <th>Sexe</th>
                        <th>Agent modif</th>
                        <th>Date Opération</th>
                        <th>Version</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
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

export default Consultation_diverses_modifications;
