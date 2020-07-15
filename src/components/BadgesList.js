import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <div className="Badgeslist__container">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li className="BadgesList__item" key={badge.id}>
                <div className="BadgesList__img">
                  <img
                    className="BadgesList__img-container"
                    src={badge.avatarUrl}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="Badges_Names">
                    {badge.firstName}&nbsp;
                    {badge.lastName}
                  </p>
                  <span className="Badges_twitter">@{badge.twitter}</span>
                  <p className="BadgesList__jobTitle">{badge.jobTitle}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
