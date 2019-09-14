import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../actions/logout";

import firebase from "../firebase/config";

const NavBar = props => {
  const loginSelector = useSelector(state => state.logIn);
  const signinSelector = useSelector(state => state.signIn);
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();
  const logoutUserAction = () => dispatch(logoutUser());

  useEffect(() => {
    firebase.getUserState().then(user => {
      setUserState(user);
    });
  }, []);

  const logout = async () => {
    setUserState(null);
    await logoutUserAction();
    props.history.replace("/");
  };

  let buttons;
  if (
    (loginSelector.user && loginSelector.user.hasOwnProperty("user")) ||
    (signinSelector.user && signinSelector.user.hasOwnProperty("user")) ||
    userState !== null
  ) {
    buttons = (
      <>
        <li>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </li>
      </>
    );
  } else {
    buttons = (
      <>
        <li>
          <Link to="/signin">singIn</Link>
        </li>
        <li>
          <Link to="/login">logIn</Link>
        </li>
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">ReactReduxFirebaseAuth</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/createpost">New Post</Link>
        </li>
        {buttons}
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
