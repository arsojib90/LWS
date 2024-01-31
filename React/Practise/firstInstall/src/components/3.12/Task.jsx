import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Task({ task, onDeleteTask, onChangeTask }) {
  const [editing, setEditing] = useState(false);

  let TaskContent;
  if (editing) {
    TaskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setEditing(!editing)}>Save</button>
      </>
    );
  } else {
    TaskContent = (
      <>
        {task.text}
        <button onClick={() => setEditing(!editing)}>Edit</button>
      </>
    );
  }
  return (
    <div>
      <li>
        <label style={{ display: "flex", gap: "5px", marginTop: "15px" }}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              onChangeTask({
                ...task,
                done: e.target.checked,
              });
            }}
          />
          {TaskContent}
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </label>
      </li>
    </div>
  );
}
