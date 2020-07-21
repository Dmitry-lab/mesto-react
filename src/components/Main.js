import React from 'react';

function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-block">
            <img className="profile__avatar" src="images/avatar.jpg" alt="аватар пользователя" />
            <div className="profile__shadow-rect" onClick={props.handleEditAvatarClick}></div>
            <img className="profile__edit-icon" src="images/edit-icon.svg" alt="иконка редактирования аватара" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="default-button profile__edit-button" type="button" onClick={props.handleEditProfileClick}></button>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button className="default-button profile__add-button" type="button" onClick={props.handleAddPlaceLink}></button>
      </section>
      <section className="gallery">
      </section>
    </main>
  )
}

export default Main;
