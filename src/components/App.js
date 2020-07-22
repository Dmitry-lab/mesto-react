import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpened] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpened] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpened] = React.useState(false);

  const handleEditProfileClick = () => {
    setProfilePopupOpened(!isEditProfilePopupOpen);
  }

  const handleEditAvatarClick = () => {
    setAvatarPopupOpened(!isEditAvatarPopupOpen);
  }

  const handleAddPlaceLink = () => {
    setPlacePopupOpened(!isAddPlacePopupOpen);
  }

  return (
    <div className="page">
      <Header />
      <Main handleEditProfileClick={handleEditProfileClick} handleEditAvatarClick={handleEditAvatarClick} handleAddPlaceLink={handleAddPlaceLink}/>
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={handleEditProfileClick}
        children={
          <>
            <input className="popup__item popup__item_type_name" id="input-name" type="text" name="profile-name" placeholder="Имя"
              minLength="2" maxLength="40" pattern="[A-Za-zА-Яа-яЁё\s\-]*" required
            />
            <span className="popup__error" id="input-name-error"></span>
            <input className="popup__item popup__item_type_description" id='input-description' type="text" name="profile-description"
              placeholder="О себе" minLength="2" maxLength="200" required
            />
            <span className="popup__error" id="input-description-error"></span>
            <button className="default-button popup__save-button" type="submit">Сохранить</button>
          </>
        }
      />
      <PopupWithForm name="add-image" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={handleAddPlaceLink}
       children={
          <>
            <input className="popup__item popup__item_type_name" id="input-place-name" type="text" name="place-name"
              placeholder="Название" minLength="1" maxLength="30" required
            />
            <span className="popup__error" id="input-place-name-error"></span>
            <input className="popup__item popup__item_type_description" id="input-url" type="url" name="place-link"
              placeholder="Ссылка на картинку" required
            />
            <span className="popup__error" id="input-url-error"></span>
            <button className="default-button popup__save-button" type="submit">Создать</button>`
          </>
        }
      />
      <PopupWithForm name="agreement" title="Вы уверены?" children={
        <button className="default-button popup__save-button" type="submit">Да</button>}
      />
      <PopupWithForm name="avatar-change" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={handleEditAvatarClick}
        children={
          <>
            <input className="popup__item popup__item_type_name" id="input-url" type="url" name="user-avatar" placeholder="Ссылка на аватар" required />
            <span className="popup__error" id="input-url-error"></span>
            <button className="default-button popup__save-button" type="submit">Сохранить</button>
          </>
        }
      />
      <ImagePopup />
    </div>
  )
}

export default App;
