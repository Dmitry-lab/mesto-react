import React from 'react';

function ImagePopup() {
  return (
    <div className="popup" id="popup-image">
      <figure className="popup__image-container">
        <img className="popup__image" src="./images/elbrus.jpg" alt="" />
        <figcaption className="popup__image-caption"></figcaption>
        <button className="default-button popup__close-button" type="button"></button>
      </figure>
    </div>
  )
}

export default ImagePopup;
