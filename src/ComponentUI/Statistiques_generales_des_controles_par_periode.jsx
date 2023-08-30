import React from 'react';
import '../styles/style_global.css';

const Statistiques_generales_des_controles_par_periode = () => {
    return (
        <div>
            <h1>CONSULTATION DES STATISTIQUES DES CONTROLES PAR CENTRE ET POUR UNE PERIODE</h1>
           
            <div class="search-container">
                <div class="search-range">
                    <input type="text" placeholder="début période" />
                    <span>à</span>
                    <input type="text" placeholder="fin période" />
                </div>
                <div class="button-container">
                    <button class="cancel-button">Charger</button>
                </div>
            </div>

            <h3>STATISTIQUES GENERATLES DES CONTROLES AU COURS DE LA PERIODE ALLANT DU : null AU null IMPRIMEES LE 02/08/2023</h3>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>REGION</th>
                        <th>CENTRE</th>
                        <th>CONTROLES ORDONNANCES</th>
                        <th>EFF_EMP_ORD</th>
                        <th>CONTROLES ORDONNANCES ET REALISES</th>
                        <th>EFF_EMP_ORD ET REA</th>
                        <th>CONTROLES REALISES</th>
                        <th>EFF_EMP_REA</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 7</td>
                        <td>Donnée 8</td>
                    </tr>
                    <tr>
                        
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 7</td>
                        <td>Donnée 8</td>
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Statistiques_generales_des_controles_par_periode;
