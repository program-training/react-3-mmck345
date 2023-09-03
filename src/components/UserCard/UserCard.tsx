import React from 'react';
import './UserCard.css';
import { User } from '../../interfaces/UsersInterface';



const UserCard = (user: User) => {

  // const []

  return (
    <div className="user-card" id={`user-card-${user.id}`}>
      <h2>{user.name}</h2>
      <p>{user.email}</p> 
      <p>{user.phone}</p>

      <h3>Address:</h3>
      <p>{user.address.street}</p>
      <p>{user.address.city}, {user.address.zipcode}</p>

      <h3>Company:</h3>
      <p>{user.company.name}</p>
      <p>{user.company.catchPhrase}</p>

      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default UserCard;