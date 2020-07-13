/* tradition code of javascript */
/* const element = document.createElement("h1");
element.innerText = "Hello Project";

const container = document.getElementById("app");

container.appendChild(element); */

import React from "react";
import ReactDOM from "react-dom";

const element = <h1>hello, project react</h1>;
const container = document.getElementById("app");

ReactDOM.render(element, container);
