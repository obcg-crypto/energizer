import React, { useState } from 'react';
import '../styles/Modal.css';

const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal ${showModal ? 'active' : ''}`}>
      <div class="search-container">
        <form action="">
          <div className="headerTable headerTableDynamique">
            <input class="texte" type="text" placeholder="Le dernier Jour du trimestre: *" required/>
            <input class="texte" type="text" placeholder="La date fin du dernier trimestre: *" required/>
            <input class="texte" type="text" placeholder="Entrer le Code Centre: *" required/>
          </div>
          <div class="button-container">
            <button class="cancel-button" onClick={closeModal} type='submit'>OK</button>
            <button class="cancel-button" onClick={closeModal}>CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
