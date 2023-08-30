import React from 'react';
import '../styles/style_global.css';

const Declarations_effectuees_au_litre_un_mois_non_encore_soldees = () => {
    return (
        <div>

            <h1>Déclaration effectuées au titre d'un mois et non encore soldées</h1>
        
            <table>
                <thead>
                    <tr>
                        <th>
                            Déclaration effectuée au titre de 
                        </th>
                        <th>
                            Début période exigibilité
                        </th>
                        <th>
                            Fin période exigibilité
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="date" name="" id="" />
                        </td>
                        <td>
                            <input type="date" name="" id="" />
                        </td>
                        <td>
                            <input type="date" name="" id="" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="button-container">
                <button class="cancel-button">Rechercher</button>
            </div>



            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            Code centre 
                        </th>
                        <th>
                            Libellé CPS
                        </th>
                        <th>
                            rubrique
                        </th>
                        <th>
                            Montant
                        </th>
                        <th>
                            co...
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="button-container">
                <button class="cancel-button">Exporter</button>
            </div>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>

        </div>
    );
}

export default Declarations_effectuees_au_litre_un_mois_non_encore_soldees;
