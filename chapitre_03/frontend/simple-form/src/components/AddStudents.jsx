import { useState, useEffect } from "react";

const AddStudents = () => {
  const [name, setName] = useState("");

  const add = () => {
    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    });
  };
  return (
    <>
      <h2> Ajout des étudiants</h2>
      <input
        type="text"
        placeholder="prenom"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <button onClick={add}>Ajouter</button>
    </>
  );
};

export default AddStudents;
