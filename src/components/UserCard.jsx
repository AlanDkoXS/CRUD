import React from 'react';
import { CiGift } from 'react-icons/ci';
import { MdDelete, MdEmail } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import '../assets/styles/UserCard.css';
import userUnknow from '../assets/img/user.svg';

export default function UserCard({ user, openEdit, openDelete }) {
  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__img"
          width={50}
          src={user?.image_url ? user.image_url : userUnknow}
          alt="user image"
        />
        <h3 className="card__name">
          {' '}
          {user?.first_name} {user?.last_name}
        </h3>
      </div>

      <div className="card__info">
        <div>
          <span className="card__label">Email: </span>
          <span className="card__data">
            <MdEmail className="icon--mail" /> {user?.email}
          </span>
        </div>
        <div>
          <span className="card__label">Birthday: </span>
          <span className="card__data">
            <CiGift className="icon--gift" />{' '}
            {new Date(user?.birthday).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>
      <div className="card__btns">
        <button
          className="btn btn--edit"
          onClick={() => {
            openEdit(user);
          }}
        >
          <FaEdit />
        </button>
        <button
          className="btn btn--erase"
          onClick={() => {
            openDelete(user);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
