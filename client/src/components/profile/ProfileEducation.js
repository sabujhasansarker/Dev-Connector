import React from "react";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, from, to, desctiption, fieldofstudy, degree },
}) => {
  return (
    <div>
      <h3>{school}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
        {!to ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {fieldofstudy}
      </p>
      {desctiption && (
        <p>
          <strong>Description: </strong>
          {desctiption}
        </p>
      )}
    </div>
  );
};

export default ProfileEducation;
