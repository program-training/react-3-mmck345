import './UsersFromServer.css'
import { useEffect, useState } from "react";
import { User } from "../../interfaces/UsersInterface";
import UserCard from "../UserCard/UserCard";

// import lodash from 'lodash'

export default function UsersFromServer() {
  const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        const getData = async () => {
        let loadUsers = await (await fetch("https://jsonplaceholder.typicode.com/users")).json() as User[]
        setUsers(loadUsers);
        };
        getData();
    },[]);


  console.log(users);
  
//   let isUsersEmpty: boolean = lodash.isEmpty(users);
  return (
    <div className="container-card">
        {
            (users && users.map(user => <UserCard key={user.id} {...user}/>))
        }
    </div>
    
  )
};
