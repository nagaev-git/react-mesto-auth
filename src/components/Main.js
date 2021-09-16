import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__overlay" onClick={props.onEditAvatar}>
          <img
            src={currentUser.avatar}
            alt="Аватар"
            className="profile__image"
          />
        </div>
        <div className="profile__items">
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__job">{currentUser.about}</p>
          </div>
          <div className="profile__button">
            <button
              type="button"
              aria-label="Редактировать профиль"
              className="profile__button-edit"
              onClick={props.onEditProfile}
            ></button>
            <button
              type="button"
              aria-label="Добавить карточку"
              className="profile__button-add"
              onClick={props.onAddPlace}
            ></button>
          </div>
        </div>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
