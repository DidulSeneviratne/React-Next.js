import './App.css'
import { useEffect, useState, useReducer } from "react";
import React from "react"
import didul from "./images/myself-modified.png";

let language = 'Javascript'

function Header({ name, year }) {
  return (
    <header>
      <h1>{name} Seneviratne</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  "Milk Rice",
  "Fried Rice",
  "Yellow Rice",
  "Lump Rice"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({dishes, openStatus, onStatus}){
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>
          I want to be{" "}
          {openStatus ? "closed" : "open"}
        </button>
        <h2>
          This is my wildish restaurant!{" "}
          {openStatus ? "Open" : "Closed"}
        </h2>
        <main>
          <img 
            src="https://github.com/DidulSeneviratne.png"
            height={200} 
            alt = "didul's picture"
          />
          <ul>
            {dishes.map((dish) => (
              <li key={dish.id} style={{listStyleType: "square"}}>{dish.title}</li>
            ))}
          </ul>
        </main>
      </div>
    </>  
  )
}

function App() {
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  );

  useEffect(() => {
    console.log(
      `This restaurant is ${status ? "open" : "closed"}.`
    );
  }, [status]);

  return (
    <div>
      <h1> 
        The resturent is currently{" "}
        {status ? "open" : "closed"}. </h1>
      <button onClick={toggle}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name = 'Thisal' year = {new Date().getFullYear()}/>
      <Main dishes = {dishObjects} openStatus = {status} onStatus = {toggle}/>
    </div>
  )
}

export default App
