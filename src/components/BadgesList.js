import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";

import Gravatar from "../components/Gravatar";
/* this.props.badges.payload.map((badge) if is of url www...payload <-- add  */

class BadgesList extends React.Component {
  state = {
    loading: false,
  };

  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <div className="Badgeslist__container">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
                key={badge.id}
              >
                <li className="BadgesList__item">
                  <div className="BadgesList__img">
                    <Gravatar
                      className="BadgesList__img-container"
                      email={badge.email}
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
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
