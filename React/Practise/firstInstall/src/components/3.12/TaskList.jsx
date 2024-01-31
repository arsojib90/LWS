/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Task from "./Task";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <div>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
