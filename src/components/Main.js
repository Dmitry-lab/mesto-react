import React from 'react';
import projectApi from '../utils/api';
import editAvatarIcon from '../images/edit-icon.svg'

function Main(props) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setDescription] = React.useState('Исследователь океана');
  const [userAvatar, setAvatar] = React.useState('images/avatar.jpg');
  const [cards, setCards] = React.useState([]);

  React.useEffect(()=> {
    Promise.all([projectApi.getUserInfo(), projectApi.getInitialCards()])
      .then(([userInfo, cardsArr]) => {
        setUserName(userInfo.name);
        setDescription(userInfo.about);
        setAvatar(userInfo.avatar);
        setCards(cardsArr)
      })
      .catch(err => {
        console.log(`Ошибка ${err}`);
        alert('Ошибка подключения к серверу.')
      })
    }, []
  )

  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-block">
            <img className="profile__avatar" src={userAvatar} alt="аватар пользователя" />
            <div className="profile__shadow-rect" onClick={props.handleEditAvatarClick}></div>
            <img className="profile__edit-icon" src={editAvatarIcon} alt="иконка редактирования аватара" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="default-button profile__edit-button" type="button" onClick={props.handleEditProfileClick}></button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="default-button profile__add-button" type="button" onClick={props.handleAddPlaceLink}></button>
      </section>
      <section className="gallery">
        {cards.map(cardInfo => {
          return (
            <figure className="card" key={cardInfo._id}>
              <img className="card__image" src={cardInfo.link} alt={cardInfo.name}/>
              <div className="card__shadow-rect" data-url={cardInfo.link} data-alt={cardInfo.name}></div>
              <figcaption className="card__caption-content">
                <p className="card__caption">{cardInfo.name}</p>
                <div className="card__likes-block">
                  <button className="default-button card__like-button" type="button"></button>
                  <span className="card__likes-counter">{cardInfo.likes.length}</span>
                </div>
                <button className="default-button card__delete-button" type="button"></button>
              </figcaption>
            </figure>
          )
        })}
      </section>
    </main>
  )
}

export default Main;
