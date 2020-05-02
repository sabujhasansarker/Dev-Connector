import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: { user, status, company, location, skills },
}) => {
  return (
    <div className="profile bg-light">
      <img
        className="round-img"
        src={user && user.avatar}
        alt={user && user.name}
      />
      <div>
        <h2>{user && user.name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p>{location}</p>
        <Link to={`/profile/${user && user._id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>

      <ul>
        {skills.map((skill, index) => (
          <li className="text-primary" key={index}>
            <i className="fas fa-check"></i> {skill.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
