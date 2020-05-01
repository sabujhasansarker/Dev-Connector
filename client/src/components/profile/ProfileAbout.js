import React, { Fragment } from "react";

const ProfileAbout = ({ profile: { bio, user, skills } }) => {
  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 className="text-primary">{user.name}'s Bio</h2>
          <p>{bio}</p>
        </Fragment>
      )}
      <div className="line"></div>
      {skills && (
        <Fragment>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <div className="p-1" key={index}>
                <i className="fa fa-check"></i> {skill.toUpperCase()}
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ProfileAbout;
