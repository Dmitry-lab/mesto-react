import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup" id="popup-profile">
        <form className="popup__container" novalidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <input className="popup__item popup__item_type_name" id="input-name" type="text" name="profile-name" placeholder="Имя" minlength="2" maxlength="40" pattern="[A-Za-zА-Яа-яЁё\s\-]*" required />
          <span className="popup__error" id="input-name-error"></span>
          <input className="popup__item popup__item_type_description" id='input-description' type="text" name="profile-description" placeholder="О себе" minlength="2" maxlength="200" required />
          <span className="popup__error" id="input-description-error"></span>
          <button className="default-button popup__save-button" type="submit">Сохранить</button>
          <button className="default-button popup__close-button" type="button"></button>
        </form>
      </div>
      <div className="popup" id="popup-add-image">
        <form className="popup__container" novalidate>
          <h2 className="popup__title">Новое место</h2>
          <input className="popup__item popup__item_type_name" id="input-place-name" type="text" name="place-name" placeholder="Название" minlength="1" maxlength="30" required />
          <span className="popup__error" id="input-place-name-error"></span>
          <input className="popup__item popup__item_type_description" id="input-url" type="url" name="place-link" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="input-url-error"></span>
          <button className="default-button popup__save-button" type="submit">Создать</button>
          <button className="default-button popup__close-button" type="button"></button>
        </form>
      </div>
      <div className="popup" id="popup-image">
        <figure className="popup__image-container">
          <img className="popup__image" src="./images/elbrus.jpg" alt="" />
          <figcaption className="popup__image-caption"></figcaption>
          <button className="default-button popup__close-button" type="button"></button>
        </figure>
      </div>
      <div className="popup" id="popup-agreement">
        <form className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="default-button popup__save-button" type="submit">Да</button>
          <button className="default-button popup__close-button" type="button"></button>
        </form>
      </div>
      <div className="popup" id="popup-avatar-change">
        <form className="popup__container" novalidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <input className="popup__item popup__item_type_name" id="input-url" type="url" name="user-avatar" placeholder="Ссылка на аватар" required />
          <span className="popup__error" id="input-url-error"></span>
          <button className="default-button popup__save-button" type="submit">Сохранить</button>
          <button className="default-button popup__close-button" type="button"></button>
        </form>
      </div>
    </div>
  );
}

export default App;
