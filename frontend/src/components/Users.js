import React,{useState, useEffect, useContext} from "react";
import { useParams, Link, useHistory} from 'react-router-dom';
import DispatchContext from "../dispatchContext";
import UserContext from "../UserContext";
import { removeUser } from "../actions/userActions";

const Users = () => {
    const { id } = useParams();
const dispatch = useContext(DispatchContext);
const users = useContext(UserContext);
const history = useHistory();
const [user, setUser] = useState({})


useEffect(()=> {
    function getUserDetails(){
        for(let singleUser of users) {
            if(+singleUser.id === +id) {
                setUser(singleUser);
            }
        }

    }
    getUserDetails();
}, [id, users])

async function deleteUser() {
    try {
    await dispatch(removeUser(user.id));
    history.push('/');
} catch(err){
    console.log(err)
}
}

return (
    <div className="card">
    <div className="card-header">
    <h4 className="card-title"> User Details </h4>
    </div>
    <div className="card-body">
        <h5 className="card-title"> {user.firstName} {user.lastName} </h5>
        <p className="card-text">Email - {user.email}</p>
    <Link  className="btn btn-primary" role="button" to={`/profile/${user.id}`}> Update Profile </Link>{'   '}
    <button className="btn btn-primary" onClick={deleteUser}>Delete User</button>
    </div>
    </div>

)
}

export default Users;
