import { useState } from "react";

export default function Sojib() {
  const person = [
    {
      name: "sojib",
      age: 22,
      class: "Hons",
      describtion: "Hello 1",
    },
    {
      name: "main",
      age: 21,
      class: "HSC",
      describtion: "Hello 12",
    },
    {
      name: "sahin",
      age: 20,
      class: "SSC",
      describtion: "Hello 13",
    },
  ];
  const [index, setIndex] = useState(0);
  const [details, setDetails] = useState(0);

  let per = person[index];
  function handleClick() {
    setIndex(index + 1);
  }

  function handleDetails() {
    setDetails(!details);
  }
  return (
    <div>
      <h1>{per.name}</h1>
      <h2>{per.age}</h2>
      <h2>{per.class}</h2>
      <button onClick={handleDetails}>
        {setDetails ? "Hide" : "Show"} Show Details
      </button>
      {details && <p>{per.describtion}</p>}
      <button onClick={handleClick}>Next</button>
    </div>
  );
}
