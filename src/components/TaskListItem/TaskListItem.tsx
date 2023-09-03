import { Task } from "../../interfaces/Task";


const TaskListItem = (task: Task) => {
  return (
    <li key={task.id}>
        {task.title}
    </li>
  );
};

export default TaskListItem;