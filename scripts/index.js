const page = document.querySelector(".page");
//Profile info
const displayName = document.querySelector(".profile__details-name");
const displayDescription = document.querySelector(
  ".profile__details-description"
);
//Botones de abrir y cerrar popups
const openPopupButton = document.querySelector(".profile__info-button");
const openPopupAddButton = document.querySelector(".profile__info-button-add");
const closePopupButton = document.querySelector(".popup__button-close");
const closePopupAddButton = document.querySelector(".popup-add__button-close");
const closePopupImageButton = document.querySelector(
  ".popup-image__button-close"
 
);
//Popups
const popupElement = document.querySelector(".popup");
const popupAddElement = document.querySelector("#popup-add");
const popupImageElement = document.querySelector(".popup-image");

//Popup content
const formElement = document.querySelector(".popup__form");
const inputElement = document.querySelector(".popup__form-input");
const formEditElement = document.querySelector("#form-edit");
const formAddElement = document.querySelector("#form-add");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#occupation");
const descriptionInput = document.querySelector("#description");
const imageInput = document.querySelector("#image");
const submitButton = document.querySelector(".popup__button");

const gallery = document.querySelector(".gallery");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function handlePopupOpen(openPopup) {
  openPopup.classList.add("popup_opened");
}

function handlePopupClose() {
  popupElement.classList.remove("popup_opened");
}
