import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import AgreementPopup from './AgreementPopup';
import ImagePopup from './ImagePopup';
import projectApi from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpened] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpened] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpened] = React.useState(false);
  const [isAgreementAvatarOpen, setAgreementPopupOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({img: '', alt: '', opened: false});

  // установка состояний: Пользователь, удаляемая карточка, массив карточек
  const [currentUser, setCurrentUser] = React.useState({});
  const [deletedCard, setDeletedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(()=>{
    Promise.all([projectApi.getUserInfo(), projectApi.getInitialCards()])
      .then(([userInfo, cardsArr]) => {
        setCurrentUser(userInfo);
        setCards(cardsArr);
      })
      .catch(err => {
        console.log(`Ошибка ${err}`);
        alert('Ошибка подключения к серверу.')
      })
  }, []
  )

  const handleEditProfileClick = () => {
    setProfilePopupOpened(true)
  }

  const handleEditAvatarClick = () => {
    setAvatarPopupOpened(true)
  }

  const handleAddPlaceLink = () => {
    setPlacePopupOpened(true)
  }

  const handleDeleteCardClick = (card) => {
    setAgreementPopupOpened(true);
    setDeletedCard(card);
  }

  const handleCardClick = (card) => {
    setSelectedCard({src: card.link, alt: card.name, opened: true})
  }

  const closeAllPopups = (e) => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close-button')) {
      setProfilePopupOpened(false);
      setAvatarPopupOpened(false);
      setPlacePopupOpened(false);
      setAgreementPopupOpened(false);
      setSelectedCard({src: '', alt: '', opened: false})
    }
  }

  //Функция замены карточек в массиве на новую
  function replaceCard(newCard) {
    const newCards = cards.map(card => card._id === newCard._id ? newCard : card);
    setCards(newCards);
  }

  //Обработчик нажатия кнопки "like"
  function handleCardLike(card) {
    if (card.likes.some(x => x._id === currentUser._id))
      projectApi.deleteLike(card._id)
        .then(newCard => replaceCard(newCard))
        .catch(err => {
          console.log(`Ошибка ${err}`);
          alert('Ошибка сервера. Повторите действие позже');
        })
    else
      projectApi.putLike(card._id)
        .then(newCard => replaceCard(newCard))
        .catch(err => {
          console.log(`Ошибка ${err}`);
          alert('Ошибка сервера. Повторите действие позже');
        })
  }

  //Обработчик подтверждения удаления карточки
  function handleSubmitCardDelete(card) {
    projectApi.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(x => x._id !== card._id);
        setCards(newCards);
        setAgreementPopupOpened(false);
      })
      .catch(err => {
        setAgreementPopupOpened(false)
        console.log(`Ошибка ${err}`);
        alert('Ошибка сервера. Попробуйте повторить действие позже.');
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onEditAvatarClick={handleEditAvatarClick}
          onAddPlaceLink={handleAddPlaceLink}
          onCardClick={handleCardClick}
          onDeleteCardClick={handleDeleteCardClick}
          cards={cards}
          onCardLike = {handleCardLike}
        />
        <Footer />

        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} submitButtonText="Сохранить">
          <input
            className="popup__item popup__item_type_name"
            id="input-name"
            type="text"
            name="profile-name"
            placeholder="Имя"
            minLength="2" maxLength="40"
            pattern="[A-Za-zА-Яа-яЁё\s\-]*"
            required
          />
          <span className="popup__error" id="input-name-error" />
          <input
            className="popup__item popup__item_type_description"
            id="input-description"
            type="text"
            name="profile-description"
            placeholder="О себе"
            minLength="2" maxLength="200"
            required
          />
          <span className="popup__error" id="input-description-error" />
        </PopupWithForm>

        <PopupWithForm name="add-image" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} submitButtonText="Создать">
          <input
            className="popup__item popup__item_type_name"
            id="input-place-name"
            type="text"
            name="place-name"
            placeholder="Название"
            minLength="1" maxLength="30"
            required
          />
          <span className="popup__error" id="input-place-name-error" />
          <input
            className="popup__item popup__item_type_description"
            id="input-url"
            type="url"
            name="place-link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error" id="input-url-error" />
        </PopupWithForm>

        <AgreementPopup
          name="agreement"
          title="Вы уверены?"
          submitButtonText="Да"
          isOpen={isAgreementAvatarOpen}
          onClose={closeAllPopups}
          deletedCard={deletedCard}
          onSubmit={handleSubmitCardDelete}
        />

        <PopupWithForm name="avatar-change" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} submitButtonText="Сохранить">
          <input
            className="popup__item popup__item_type_name"
            id="input-url"
            type="url"
            name="user-avatar"
            placeholder="Ссылка на аватар"
            required
          />
          <span className="popup__error" id="input-url-error" />
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
