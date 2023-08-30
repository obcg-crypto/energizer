import React from 'react';
import '../styles/style_global.css';

const Employeur_ayant_teledeclare_sans_contrepartie_credit = () => {
    return (
        <div>

            <h1>Fichier des employeurs ayant teledeclaré sans contrepartie de crédit</h1>
        
            <table>
                <thead>
                    <tr>
                        <th>
                            Structure 
                        </th>
                        <th>
                            Début période écriture
                        </th>
                        <th>
                            Fin période écriture
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <select id="search-option">
                                <option value="1">DRCSE</option>
                                <option value="2">#</option>
                            </select>
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
                <button class="cancel-button">Exporter</button>
            </div>
            

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>
        </div>
    );
}

export default Employeur_ayant_teledeclare_sans_contrepartie_credit;
