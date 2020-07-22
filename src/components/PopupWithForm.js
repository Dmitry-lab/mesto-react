import React from 'react';

function PoupWithForm(props) {
  const fullClassName = props.isOpen ? 'popup popup_opened' : 'popup';

  return (
    <div className={fullClassName} id={`popup-${props.name}`} onClick={props.onClose}>
      <form className="popup__container" noValidate>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button className="default-button popup__close-button" type="button" onClick={props.onClose}></button>
      </form>
    </div>
  )
}

export default PoupWithForm;
