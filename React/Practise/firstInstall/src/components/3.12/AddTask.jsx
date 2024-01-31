/* eslint-disable react/prop-types */
// import { useState } from "react";

// export default function AddTask({ onAdd }) {
//   const [text, setText] = useState("");
//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <div style={{ display: "flex", gap: "5px" }}>
//       <input
//         type="text"
//         placeholder="Add Task"
//         value={text}
//         onChange={handleChange}
//       />
//       <button
//         onClick={() => {
//           setText("");
//           onAdd(text);
//         }}
//       >
//         Add
//       </button>
//     </div>
//   );
// }

import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text.trim() !== "") {
      // Check if the trimmed text is non-empty
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
