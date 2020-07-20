import React from 'react';

function Main() {
  const handleEditProfileClick = () => {
    document.querySelector('#popup-profile').classList.add('popup_opened');
  }

  const handleEditAvatarClick = () => {
    document.querySelector('#popup-avatar-change').classList.add('popup_opened');
  }

  const handleAddPlaceLink = () => {
    document.querySelector('#popup-add-image').classList.add('popup_opened');
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-block">
            <img className="profile__avatar" src="images/avatar.jpg" alt="аватар пользователя" />
            <div className="profile__shadow-rect" onClick={handleEditAvatarClick}></div>
            <img className="profile__edit-icon" src="images/edit-icon.svg" alt="иконка редактирования аватара" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="default-button profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button className="default-button profile__add-button" type="button" onClick={handleAddPlaceLink}></button>
      </section>
      <section className="gallery">
      </section>
    </main>
  )
}

export default Main;
