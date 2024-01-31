import { useReducer } from "react";
import { initialTasks } from "./data/tasks";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import taskReducer from "./reducers/taskReducer";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const getNextId = (data) => {
    const maxid = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxid + 1;
  };

  //Handlers

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getNextId(tasks),
    });
  };
  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };
  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <div>
      <h1>Daily Tasks</h1>

      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
