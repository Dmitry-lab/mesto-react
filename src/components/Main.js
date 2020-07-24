import React from 'react';
import projectApi from '../utils/api';
import editAvatarIcon from '../images/edit-icon.svg';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setDescription] = React.useState('Исследователь океана');
  const [userAvatar, setAvatar] = React.useState('');
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
  );

  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-block" onClick={props.onEditAvatarClick}>
            <img className="profile__avatar" src={userAvatar} alt="аватар пользователя" />
            <div className="profile__shadow-rect" />
            <img className="profile__edit-icon" src={editAvatarIcon} alt="иконка редактирования аватара" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="default-button profile__edit-button" type="button" onClick={props.onEditProfileClick} />
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="default-button profile__add-button" type="button" onClick={props.onAddPlaceLink} />
      </section>
      <section className="gallery">
        {cards.map(cardInfo => <Card key={cardInfo._id} card={cardInfo} onCardClick={props.onCardClick}/>)}
      </section>
    </main>
  )
}

export default Main;
