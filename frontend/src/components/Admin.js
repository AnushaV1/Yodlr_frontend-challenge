import React, {useContext} from "react";
import UserContext from "../UserContext";
import SingleUser from "./SingleUser";

const Admin = () => {
    const users = useContext(UserContext);
    const userList = Object.values(users);


    return (
        <div>
        {userList.map(user => (
            <SingleUser
            key={user.id}
            user={user}
            />
        ))}
        </div>
    )
}

export default React.memo(Admin);