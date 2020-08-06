import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";

import Gravatar from "../components/Gravatar";
/* this.props.badges.payload.map((badge) if is of url www...payload <-- add  */

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="">filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="Badgeslist__container">
      <div className="form-group">
        <label htmlFor="">filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
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

export default BadgesList;
