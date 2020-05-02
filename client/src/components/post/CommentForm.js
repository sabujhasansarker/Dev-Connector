import React, { useState } from "react";
import { connect } from "react-redux";

import { addComment } from "../../action/post";

const CommentForm = ({ addComment, postId }) => {
  const [text, setText] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText("");
  };
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave A Comment</h3>
      </div>
      <form className="form my-1" onSubmit={onsubmit}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Comment on this post"
          onChange={(e) => setText(e.target.value)}
          required
          value={text}
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

export default connect(null, { addComment })(CommentForm);
