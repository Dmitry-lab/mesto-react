import React from 'react';

function Card(props) {

  const handleCardClick = () => props.onCardClick(props.card);

  return (
    <figure className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name}/>
      <div className="card__shadow-rect" data-url={props.card.link} data-alt={props.card.name} onClick={handleCardClick} />
      <figcaption className="card__caption-content">
        <p className="card__caption">{props.card.name}</p>
        <div className="card__likes-block">
          <button className="default-button card__like-button" type="button" />
          <span className="card__likes-counter">{props.card.likes.length}</span>
        </div>
        <button className="default-button card__delete-button" type="button" />
      </figcaption>
    </figure>
  );
}

export default Card;
