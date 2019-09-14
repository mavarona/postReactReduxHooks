import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { createUser } from "../actions/signin";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [routeRedirect, setRouteRedirect] = useState(false);
  const dispatch = useDispatch();
  const createUserAction = (email, password) =>
    dispatch(createUser(email, password));

  const signin = async e => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await createUserAction(email, password);
      setRouteRedirect(true);
    } else {
      console.log("Need to add credentials");
    }
  };

  const redirectTo = routeRedirect;
  if (redirectTo) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <form onSubmit={signin}>
        <p>Create Account</p>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
        <input type="submit" value="Create Account" />
      </form>
    </>
  );
};

export default SignIn;
