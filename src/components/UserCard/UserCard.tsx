import { useState } from 'react';
import './UserCard.css';
import { User } from '../../interfaces/UsersInterface';
import { Task } from '../../interfaces/Task';
import TaskList from '../TodoList/TodoList';



const UserCard = (user: User) => {

  const [tasks, setTasks] = useState<Task[]>([])

  async function handleClickOnCard() {
      if (tasks.length > 0) {
        setTasks([])
      }
      else{
        let loadTasks = await (await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${user.id}`)).json() as Task[];
        loadTasks.splice(5, loadTasks.length-5)
        setTasks([...loadTasks])
      }
  }

  return (
    <div className="user-card" id={`user-card-${user.id}`} onClick={handleClickOnCard}>
      <h2>{user.name}</h2>
      <p>{user.email}</p> 
      <p>{user.phone}</p>

      <h3>Address:</h3>
      <p>{user.address.street}</p>
      <p>{user.address.city}, {user.address.zipcode}</p>

      <h3>Company:</h3>
      <p>{user.company.name}</p>
      <p>{user.company.catchPhrase}</p>

      {tasks.length > 0 && <TaskList tasks={tasks} />}
      
    </div>
  );
}

export default UserCard;