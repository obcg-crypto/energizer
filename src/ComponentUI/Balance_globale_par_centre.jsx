import React from 'react';
import '../styles/style_global.css';

const Balance_globale_par_centre = () => {
    return (
        <div>           
           
            <select id="search-option">
                <option value="centreSvp">Position employeur</option>
                <option value="doualaBonanjo">###</option>
                <option value="doualaBonanjo">###</option>
            </select>
      

            <div class="button-container">
                <button class="cancel-button">Charger</button>
            </div>


            <h3>Récapitulatif balance par CPS</h3>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Libelle centre</th>
                        <th>Solde imputé</th>
                        <th>Solde non identifié</th>
                        <th>Solde final</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>                    
                    </tr>
                </tbody>
            </table>
            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Balance_globale_par_centre;
