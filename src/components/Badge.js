import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="lgo de la platzi conf" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="avatar"
          />
          <h1>
            Richard <br /> Hakfom
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Fronted Enginner</h3>
          <div>@sparrugusr</div>
        </div>
        <div className="Badge__footer">#padficonfig</div>
      </div>
    );
  }
}

export default Badge;
