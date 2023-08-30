import React from 'react';
import '../styles/style_global.css';

const Etat_salaire_par_mois = () => {
    return (
        <div class="table-container">

            <h1>Etat de salaire par mois d'activité</h1>

            <div class="footer-table">
                 <select>
                    <option value="dossier">N° Assuré</option>
                    <option value="assure">##</option>
                </select>
                <button class="cancel-button">Générer</button>
            </div>

            
            <h3>CNPS SIEGE : Activité mois par mois de l'assuré N° : null</h3>

            <table>
                <thead>
                    <tr>
                        <th>Mois</th>
                        <th>Année</th>
                        <th>Nombre jour</th>
                        <th>Salaire cotisable CNPS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Etat_salaire_par_mois;
