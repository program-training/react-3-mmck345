
import "./TodoList.css"
import { Task } from "../../interfaces/Task";
import TaskListItem from "../TaskListItem/TaskListItem";

type Props = {
  tasks: Task[];
};

export default function TaskList({ tasks }: Props) {
  return (
    <div className="div-tasks">
      <ul>
        {tasks.map((task) => (<TaskListItem key={task.id} {...task} />))}
      </ul>
    </div>
  );
}
