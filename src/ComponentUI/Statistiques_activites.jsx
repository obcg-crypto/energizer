import React from 'react';
import '../styles/style_global.css';

const Statistiques_activites = () => {
    return (
        <div>

            <h1>STATISTIQUES PAIEMENTS</h1>

            <div class="search-container">
                <div class="search-range">
                    <input type="text" placeholder="Début période" />
                    <span>à</span>
                    <input type="text" placeholder="Fin période" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">Charger</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>PERIODE du A</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>  </div>
    );
}

export default Statistiques_activites;
