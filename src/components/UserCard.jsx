import React from 'react';
import '../assets/styles/UserCard.css';
import userUnknow from '../assets/img/user.svg';

export default function UserCard({ user, openEdit, openDelete }) {
  const formattedBirthday = user?.birthday
    ? new Date(user.birthday).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : 'Not available';

  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__img"
          width={50}
          src={user?.image_url ? user.image_url : userUnknow}
          alt={
            user?.first_name
              ? `${user.first_name} ${user.last_name}`
              : 'User image'
          }
        />
        <h3 className="card__name">
          {user?.first_name && user?.last_name
            ? `${user.first_name} ${user.last_name}`
            : 'Nombre no disponible'}
        </h3>
      </div>

      <div className="card__info">
        <div>
          <span className="card__label">Email: </span>
          <span className="card__data">
            <span className="material-symbols-rounded">email</span>{' '}
            {user?.email || 'Not available'}
          </span>
        </div>
        <div>
          <span className="card__label">Birthday: </span>
          <span className="card__data">
            <span className="material-symbols-rounded">cake</span>{' '}
            {formattedBirthday}
          </span>
        </div>
      </div>
      <div className="card__btns">
        <button
          className="btn btn--edit"
          onClick={() => openEdit(user)}
          aria-label={`Edit user ${user?.first_name}`}
        >
          <span className="material-symbols-rounded">edit</span>
        </button>
        <button
          className="btn btn--erase"
          onClick={() => {
            openDelete(user);
          }}
        >
          {' '}
          <span className="material-symbols-rounded">delete</span>
        </button>
      </div>
    </div>
  );
}
