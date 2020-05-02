import React from "react";
import { connect } from "react-redux";

import { removeComment } from "../../action/post";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const CommentItem = ({
  postId,
  auth,
  comment: { _id, text, name, avatar, user, data },
  removeComment,
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt={name} />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="DD/MM/YYYY">{data}</Moment>
        </p>
        {auth.user && auth.user._id === user && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={(e) => removeComment(postId, _id)}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { removeComment })(CommentItem);
