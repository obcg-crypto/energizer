import React from 'react';
import '../styles/style_global.css';

const Brouillard_retenus_par_motif_par_banques = () => {
    return (
        <div class="table-container">

            <h1>EDITION BROUILLARD DES RETENUES PAR BANQUE AU : CNPS SIEGE</h1>
            
            <table class="first-div">
                <thead>
                    <tr>
                        <th>Periode de paiement</th>
                        <th>Motif de la retenue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" placeholder="Période de paiement" />
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="Matricule">Paiement en nature</option>
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

export default Brouillard_retenus_par_motif_par_banques;
