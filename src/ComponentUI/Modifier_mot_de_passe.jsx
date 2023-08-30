import React from 'react';
import '../styles/style.css';
import banner from '../assets/cnpsBanner.png'

const Modifier_mot_de_passe = () => {
    return (
       <div>
            
            <div class="login-form">
                <h2>MODIFIER VOTRE MOT DE PASSE</h2>
                <form>
                    <input type="text" placeholder='Login' required/>
                    <input type="password" placeholder='Old Password' required/>
                    <input type="password" placeholder='New Password' required/>
                    <input type="password" placeholder='Confirm Password' required/>
                    <button type='submit'>Modify</button>   
                </form>
            </div>
       </div>
    );
}

export default Modifier_mot_de_passe;
