import React from 'react';
import '../styles/style_global.css';

const Extraction_segmentation_detaillees = () => {
    return (
        <div>

            <h1>Extraction de la segmentation par employeur ou par CPS</h1>
        

            <table>
                <thead>
                    <tr>
                        <th>
                            Niveau de détail 
                        </th>
                        <th>
                            Type de segmentation
                        </th>
                        <th>
                            Limiter l'extraction à
                        </th>
                        <th>
                            Premier jour du mois du début
                        </th>
                        <th>
                            Dernier jour du mois du fin
                        </th>
                        <th>
                            Annee minimale dernier paiement
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <select id="search-option">
                                <option value="1">Employeur</option>
                                <option value="2">#</option>
                            </select>
                        </td>
                        <td>
                        <select id="search-option">
                                <option value="1">Mensuel</option>
                                <option value="2">#</option>
                            </select>
                        </td>
                        <td>
                        <select id="search-option">
                                <option value="1">DRONO</option>
                                <option value="2">#</option>
                            </select>
                        </td>
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
                <button class="cancel-button">Exporter</button>
            </div>
            

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>
        </div>
    );
}

export default Extraction_segmentation_detaillees;
