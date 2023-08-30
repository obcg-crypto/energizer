import React from 'react';
import '../styles/style_global.css';

const Nombre_dossiers_traites_via_GED_LAD = () => {
    return (
        <div class="table-container">

            <table class="first-div">
                <thead>
                    <tr>
                        <th>Centre</th>
                        <th>Période de Début</th>
                        <th>Période de Fin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                            <input type="text" placeholder="Valeur de début" />
                        </td>
                        <td>
                            <input type="text" placeholder="Valeur de fin" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button-container">
                <button class="cancel-button">Rechercher</button>
                <button class="cancel-button">Annuler</button>
            </div>

            <h2>STATISTIQUES DES DOSSIERS TRAITES VIA LA GED-LAD</h2>
            <h3>PERIODE DU : null AU null </h3>

            <table>
                <thead>
                    <tr>
                        <th>N° </th>
                        <th>Libellé centre</th>
                        <th>Libellé</th>
                        <th>Nombre dossiers enregistré</th>
                        <th>Nombre Dossier Traité/Immatriculation validee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Donnée 2</td>
                        <td>Donnée 3</td>
                        <td>Donnée 4</td>
                        <td>Donnée 5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Nombre_dossiers_traites_via_GED_LAD;
