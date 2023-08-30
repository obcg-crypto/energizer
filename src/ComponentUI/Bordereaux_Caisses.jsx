import React from 'react';
import '../styles/style_global.css';

const Bordereaux_Caisses = () => {
    return (
        <div class="table-container">

            <h1>EDITION BORDEREAU CAISSE AU : CNPS SIEGE</h1>
            
            <table class="first-div">
                <thead>
                    <tr>
                        <th>Date paie</th>
                        <th>Employeur</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="date" />
                        </td>
                        <td>
                            <input type="text" name="" id="" />
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

export default Bordereaux_Caisses;
