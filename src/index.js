/* tradition code of javascript */
/* const element = document.createElement("h1");
element.innerText = "Hello Project";

const container = document.getElementById("app");

container.appendChild(element); */

import React from "react";
import ReactDOM from "react-dom";

/* const element = <h1>hello, project react</h1>; */
/* const jsx = <h1>hello, project react</h1>; */
/* const element = React.createElement(
  "a",
  { href: "https://platzi.com" },
  "ir a platzi"
); */
/* const name = "lesalo"; */
/* const element = React.createElement("h1", {}, `hola, soy ${name}`); */
/* const sum = () => 3 + 3; */
/* const jsx = <h1>hola soy, {__aqui__va__expresion__}</h1>; */
/* const jsx = <h1>hola soy, {2 + 2}</h1>; */
/* const jsx = <h1>hola soy, {sum()}</h1>; */

const jsx = (
  <div>
    <h1>Hola soy leo</h1>
    <p>soy ingeniero fronted</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola soy leo"),
  React.createElement("p", {}, "soy ingeniero de la web")
);

const container = document.getElementById("app");
/* 
ReactDOM.render(__qué__,__dónde__); */
ReactDOM.render(element, container);
