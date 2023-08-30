import React from 'react';
import '../styles/style_global.css';

const Extraction_assures_volontaires = () => {

    return (
        <div>
            <h1>Extraire assuré</h1>
            <table>
                <thead>
                    <tr>
                        <th>Numéro_assuré</th>
                        <th>
                            Centre cnps
                        </th>
                        <th>
                            Critère 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="number" name="" id="" />
                        </td>
                        <td>
                        <select id="search-option">
                                <option value="centreSvp">Centre svp</option>
                                <option value="doualaBonanjo">CPS de Douala-Bonanjo</option>
                                <option value="doualaBonanjo">CPS de Bafoussam</option>
                                <option value="doualaBonanjo">CPS de Nkambe</option>
                                <option value="doualaBonanjo">CPS de Garoua</option>
                                <option value="doualaBonanjo">CPS de Bamenda</option>
                                <option value="doualaBonanjo">CPS de Dschang</option>
                                <option value="doualaBonanjo">CPS d' Ebolowa</option>
                                <option value="doualaBonanjo">CPS de Kribi</option>
                                <option value="doualaBonanjo">CNPS SIEGE</option>
                                <option value="doualaBonanjo">CPS de Mudemba</option>
                                <option value="doualaBonanjo">CPS de Kumba</option>
                                <option value="doualaBonanjo">CPS d'Akwa</option>
                                <option value="doualaBonanjo">CPS de Makepe</option>
                                <option value="doualaBonanjo">Centre hospitalier d'Essos</option>
                                <option value="doualaBonanjo">CPS-Yaounde indépendance</option>
                                <option value="doualaBonanjo">CPS de Bafia</option>
                                <option value="doualaBonanjo">CPS de Mvog-Mbi</option>
                                <option value="doualaBonanjo">CPS de Melen</option>
                                <option value="doualaBonanjo">CPS d'Ekondo-Titi</option>
                                <option value="doualaBonanjo">CPS de Sangmelima</option>
                                <option value="doualaBonanjo">CPS de Bertoua</option>
                                <option value="doualaBonanjo">CPS de Yokadouma</option>
                                <option value="doualaBonanjo">CPS de Mbalmayo</option>
                                <option value="doualaBonanjo">CPS de Nkongsamba</option>
                                <option value="doualaBonanjo">CPS de Edea</option>
                                <option value="doualaBonanjo">CPS de Bassa</option>
                                <option value="doualaBonanjo">CPS de Bonaberi</option>
                                <option value="doualaBonanjo">CPS de Buea-mile 17</option>
                                <option value="doualaBonanjo">CPS de Limbe</option>
                                <option value="doualaBonanjo">CPS de Ngaoundere</option>
                                <option value="doualaBonanjo">CPS de Banyo</option>
                                <option value="doualaBonanjo">CPS de Maroua</option>
                                <option value="doualaBonanjo">CPS de Yagoua</option>
                                <option value="doualaBonanjo">CPS de Mimboman</option>
                                <option value="doualaBonanjo">CPS de Messa-si</option>
                                <option value="doualaBonanjo">Centre des archives (Okolo)</option>
                                <option value="doualaBonanjo">CPS de Mamfe</option>
                                <option value="doualaBonanjo">Direction technique</option>
                                <option value="doualaBonanjo">Direction des finances et de la comptabilité</option>
                                <option value="doualaBonanjo">Direction des systemes d'information</option>
                                <option value="doualaBonanjo">Direction de l'audit et du controle interne</option>
                                <option value="doualaBonanjo">Direction des ressources humaines</option>
                                <option value="doualaBonanjo">Direction des affaires juridiques et du contentieux</option>
                                <option value="doualaBonanjo">Direction des affaires générales</option>
                                <option value="doualaBonanjo">Direction régionales du littoral et sud-ouest</option>
                                <option value="doualaBonanjo">Direction régionales du centre sud et est</option>
                                <option value="doualaBonanjo">Direction régionales de l'ouest et nord-ouest</option>
                                <option value="doualaBonanjo">Direction régionales de l'adaùaoua nord et extreme-nord</option>
                                <option value="doualaBonanjo">CPS de Messamendongo</option>
                                <option value="doualaBonanjo">CPS de Foumban</option>
                                <option value="doualaBonanjo">CPS secteur informel de Douala</option>
                                <option value="doualaBonanjo">CPS secteur informel de Yaoundé</option>
                            </select>
                        </td>
                        <td>
                            <select id="search-option">
                                <option value="1">Inactif</option>
                                <option value="#">#</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="button-container">
                <button class="cancel-button">Rechercher</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>
                            Libellé CPS 
                        </th>
                        <th>
                            Numéro Assuré 
                        </th>
                        <th>
                            Nom Assuré 
                        </th>
                        <th>
                            Date de naissance 
                        </th>
                        <th>
                            Sexe 
                        </th>
                        <th>
                            Position
                        </th>
                        <th>
                            Situation 
                        </th>
                        <th>
                            Code pays
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Tel
                        </th>
                        <th>
                            Adresse
                        </th>
                        <th>
                            Quartier 
                        </th>
                        <th>
                            Lieu dit 
                        </th>
                        <th>
                            Nombre de 
                        </th>
                        <th>
                            Montant Attendu
                        </th>
                        <th>
                            Nombre Mois 
                        </th>
                        <th>
                            Montant payé
                        </th>
                        <th>
                            Mois en Attente
                        </th>
                        <th>
                            Dette
                        </th>
                        <th>
                            Co...
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
                        </td>
                        <td>
                            donnée
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

export default Extraction_assures_volontaires;
