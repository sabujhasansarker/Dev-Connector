import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

import { addLike, removeLike } from "../../action/post";

const PostItem = ({
  auth,
  addLike,
  removeLike,
  post: { _id, name, avatar, user, likes, comments, date, text },
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img className="round-img" src={avatar} alt={name} />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>{" "}
        </p>
        <button
          type="button"
          onClick={(e) => addLike(_id)}
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-up"></i>
          <span> {likes.length}</span>
        </button>
        <button
          type="button"
          onClick={(e) => removeLike(_id)}
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/post/${_id}`} className="btn btn-primary">
          Discussion <span className="comment-count">{comments.length}</span>
        </Link>
        {auth._id === user && (
          <button type="button" className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth.user,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
