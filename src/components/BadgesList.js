import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
/* this.props.badges.payload.map((badge) if is of url www...payload <-- add  */

class BadgesList extends React.Component {
  state = {
    loading: true,
    badges: undefined,
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
              <li className="BadgesList__item" key={badge.id}>
                <div className="BadgesList__img">
                  {!this.state.loading || this.badges ? (
                    <Skeleton
                      animation="wave"
                      variant="circle"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <img
                      className="BadgesList__img-container"
                      src={badge.avatarUrl}
                      alt=""
                    />
                  )}
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
