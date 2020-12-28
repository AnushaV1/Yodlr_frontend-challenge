import React, { useContext } from "react";
import DispatchContext from "../dispatchContext";
import { removeUser, activateUser } from "../actions/userActions";

function SingleUser({user }) {
    const {firstName, lastName, email, state } = user;
    const dispatch = useContext(DispatchContext);
    const remove = async() => await dispatch(removeUser(user.id));
    const activate = async() => await dispatch(activateUser(user));

    return (
        <div className="container">
        <div className="row justify-content-md-center border">
    <div className="col border">{firstName}</div>
    <div className="col border">{lastName}</div>
    <div className="col border">{email}</div>    
    <div className="col border">{state === "active" ? (<span>Active</span>) : (<button onClick={activate}>
ACTIVATE</button>) }</div>
        <div className="col"><button onClick={remove}>
        DELETE
    </button></div>
    </div>
    </div>
);
}

export default SingleUser;

