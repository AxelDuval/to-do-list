import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import "../App.css";
import BtnToggle from "./BtnToggle";
import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FirebaseDatabaseMutation } from "@react-firebase/database";


export default function Form() {
  //Hook to use the state from ThemeContext
  const { theme } = useContext(ThemeContext);

  // State contains Todo's // uuidv4 module to generate random id
  const [datas, setDatas] = useState([
    { txt: "Promener le chien", id: uuidv4() },
    { txt: "Faire du sport", id: uuidv4() },
    { txt: "Aller chercher les courses", id: uuidv4() },
  ]);

  // State to add Todo's Item from input
  const [stateInput, setStateInput] = useState();

  // Update the stateInput with the value of the form input
  function linkedInput(e) {
    setStateInput(e);
  }

  // Prevent the default submit event
  // Create a new array with the rest parameter of the datas array
  function addToDo(e) {
    e.preventDefault();
    const newDatas = [...datas];

    // create a variable to store the new Todo (arr : txt and id) and push it in the datas array
    const newTodo = {};
    newTodo.txt = stateInput;
    newTodo.id = uuidv4();
    newDatas.unshift(newTodo);
    // Update te datas state with the new arr containing the news toDo
    setDatas(newDatas);
    // Reset the input value
    setStateInput("");
  }

  // Function to return a new array whithout the id selected by the delete button
  const deleteElement = (id) => {
    const filteredState = datas.filter((data) => {
      return data.id !== id;
    });
    // Update the Todo's state with the new array
    setDatas(filteredState);
  };

  return (
    <div className="m-auto my-5 px-4 col-12 col-sm-10 col-lg-6">
      {/* <FirebaseDatabaseMutation type="push" path="tasks">
      {({ runMutation }) => {
          return (
            <>
            <button>Créér</button>
            </>
          )
        }}
      </FirebaseDatabaseMutation> */}



      <BtnToggle />
      <h1 className="text-center my-3 pb-3">To Do List</h1>
      <FontAwesomeIcon icon="fa-solid fa-sun-bright" />

      <form onSubmit={(e) => addToDo(e)} className="mb-3">
        <label htmlFor="todo" className="form-label mt-3 text-center">
          Nouvelle tâche
        </label>
        <input
          value={stateInput}
          onInput={(e) => linkedInput(e.target.value)}
          type="text"
          className={theme ? "form-control bg-dark" : "form-control"}
          id="todo"
        ></input>
        <button className={theme ? "mt-2 mb-4 btn btn-warning mx-auto d-block" : "mt-2 mb-4 btn btn-primary mx-auto d-block"}>
          Ajouter
        </button>
      </form>



      
      <ul className="list-group mt-2">
        {datas.map((data) => {
          return (
            <Item
              txt={data.txt}
              key={data.id}
              id={data.id}
              deleteFunction={deleteElement}
            />
          );
        })}
      </ul>
    </div>
  );
}
