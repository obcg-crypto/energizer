import React from 'react';
import '../styles/style_global.css';

const Listing_encaissements_en_attente = () => {
    return (
        <div>
            <h1>LISTING PAR CPS DES ENCAISSEMENT EN INSTANCE</h1>
           
            <table>
                <thead>
                    <tr>
                        <th>Début période</th>
                        <th>Fin période</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="number" name="" id="" placeholder='début période'/>
                        </td>
                        <td>
                            <input type="number" name="" id="" placeholder='fin période'/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Charger</button>
            </div>


            <h3>PERIODE du null A null</h3>

            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Etab financier</th>
                        <th>code centre</th>
                        <th>Type assure</th>
                        <th>N° Assuré</th>
                        <th>Nom/raison sociale</th>
                        <th>Telephone</th>
                        <th>Ref paiement</th>
                        <th>Montant</th>
                        <th>date paiement</th>
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
                        <td>Donnée 6</td>
                        <td>Donnée 6</td>
                        <td>Donnée 6</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                        <td>Donnée 6</td>
                        <td>Donnée 6</td>
                        <td>Donnée 6</td>
                        <td>Donnée 6</td>                    
                    </tr>
                </tbody>
            </table>

            <p>Sapelli Energizer You Will Never Live Alone   ©2023 CNPS/DSI BP 441 YAOUNDE TEL : 22 23 40 11</p></div>
    );
}

export default Listing_encaissements_en_attente;
