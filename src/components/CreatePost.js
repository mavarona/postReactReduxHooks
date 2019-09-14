import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/createpost";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const createPostAction = post => dispatch(createPost(post));

  const redirectTo = redirect;
  if (redirectTo) {
    return <Redirect to="/" />;
  }

  const addPost = async e => {
    e.preventDefault();
    setLoading(true);
    let post = {
      title,
      content,
      cover: cover[0]
    };
    await createPostAction(post);
    setLoading(false);
    setRedirect(true);
  };

  let form;
  if (loading) {
    form = (
      <div className="processing">
        <p>The request is being processed</p>
        <div className="loader">Loading...</div>
      </div>
    );
  } else {
    form = (
      <form onSubmit={addPost}>
        <p>New Post</p>
        <label html="title">Post Title</label>
        <input
          type="text"
          name="title"
          onChange={e => setTitle(e.target.value)}
        />
        <label html="content">Post Content</label>
        <textarea
          name="content"
          onChange={e => setContent(e.target.value)}
        ></textarea>
        <label html="cover" className="cover">
          Cover
        </label>
        <input type="file" onChange={e => setCover(e.target.files)} />
        <input type="submit" value="Create Post" />
      </form>
    );
  }

  return <>{form}</>;
};

export default CreatePost;
