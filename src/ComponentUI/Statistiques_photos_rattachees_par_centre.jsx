import React from 'react';
import '../styles/style_global.css';

const Statistiques_photos_rattachees_par_centre = () => {
    return (
        <div>

            
            <h1>CONSULTATION DES STATISTIQUES DES PHOTOS</h1>
           
            <table>
                <thead>
                    <tr>
                        <th>
                            Période de début
                        </th>
                        <th>
                            Période de fin
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="search-range">
                                <input type="text" placeholder="Période de début" />
                            </div>
                        </td>
                        <td>
                            <div class="search-range">
                                <input type="text" placeholder="Période de fin" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="button-container">
                <button class="cancel-button">Charger</button>
            </div>


            <div>
                <h3>STATISTIQUES DES PHOTOS RATACHEES DU : null AU : null</h3>
            </div>

            <table >
                <thead>
                    <tr>
                        <th>ORDRE</th>
                        <th>CODE CENTRE</th>
                        <th>CENTRE</th>
                        <th>NOMBRE PHOTOS</th>
                    </tr>
                </thead>
                <tbody className='table_overflow'>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                    <tr>
                        
                    <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                    <tr>
                        
                    <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                    <tr>
                        
                    <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                    </tr>
                    
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p>
        </div>
    );
}

export default Statistiques_photos_rattachees_par_centre;
