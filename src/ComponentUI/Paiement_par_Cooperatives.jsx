import React from 'react';
import '../styles/style_global.css';

const Paiement_par_Cooperatives = () => {
    return (
        <div class="table-container">

            <h1>LISTING DES VIREMENTS DANS LES COOPERATIVES AU : CNPS SIEGE</h1>
            
            <table class="first-div">
                <thead>
                    <tr>
                        <th>Mois</th>
                        <th>Cooperative</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" placeholder="12011" />
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="Matricule">Choisir une coopérative SVP</option>
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

export default Paiement_par_Cooperatives;
