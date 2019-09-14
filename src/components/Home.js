import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getPosts } from "../actions/getposts";

const Home = () => {
  const getPostsSelector = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const getPostsAction = () => dispatch(getPosts());

  useEffect(() => {
    getPostsAction();
  }, []);

  return (
    <>
      <header>
        <div>
          <h1>
            React Redux <br /> Hooks Firebase
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            sapiente ratione repellendus atque iusto officiis eum eius corrupti
            animi magnam est, voluptate deserunt voluptatibus libero odio
            eveniet tempore fuga deleniti.
          </p>
        </div>
      </header>
      <div className="posts">
        {getPostsSelector.posts.map(post => {
          return (
            <div className="post" key={post.id}>
              <div
                style={{ backgroundImage: "url(" + post.data.cover + ")" }}
              />
              <Link to={"post/" + post.id}>
                <p>{post.data.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
