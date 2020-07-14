import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById("app");

ReactDOM.render(
  <BadgeNew
    firstName="leon"
    lastName="ramon"
    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
    jobTitle="Fronted Engisneer"
    twitter="leoramosa"
  />,
  container
);
