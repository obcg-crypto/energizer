import React from 'react';
import '../styles/style_global.css';

const Liste_retenues_par_motif_parcooperative = () => {
    return (
        <div class="table-container">

            <h1>EDITION DES RETENUES PAR COOPERATIVE AU : CNPS SIEGE</h1>
            
            <table class="first-div">
                <thead>
                    <tr>
                        <th>Période paiement</th>
                        <th>MOTIF DE LA RETENUE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" placeholder="12" />
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="Matricule">AUTRE</option>
                                <option value="#">###</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Charger</button>
                <button class="cancel-button">Annuler</button>
            </div>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Liste_retenues_par_motif_parcooperative;
