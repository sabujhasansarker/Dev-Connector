import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

import { addLike, removeLike, deletePost } from "../../action/post";

const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  id,
  post: { _id, name, avatar, user, likes, comments, date, text },
  showAction,
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
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>{" "}
        </p>
        {showAction && (
          <Fragment>
            <button
              type="button"
              onClick={(e) => addLike(id)}
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up"></i>
              <span> {likes.length}</span>
            </button>
            <button
              type="button"
              onClick={(e) => removeLike(id)}
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${id}`} className="btn btn-primary">
              Discussion{" "}
              <span className="comment-count">{comments.length}</span>
            </Link>
            {auth.user && auth.user._id === user && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={(e) => deletePost(id)}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showAction: true,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
