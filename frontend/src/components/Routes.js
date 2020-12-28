import React from "react";
import { Switch, Route} from  "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Users from "./Users";
import Register from "./Register";
import UpdateProfile from "./UpdateProfile";

const Routes = () => {

    return(
        <div>
        <Switch>
        <Route exact path="/">
        <Home  />
        </Route>
        <Route exact path="/admin">
        <Admin  />
        </Route>
        <Route exact path="/signup">
        <Register  />
        </Route>
        <Route exact path="/:id">
        <Users  />
        </Route>
        <Route exact path="/profile/:id">
        <UpdateProfile  />
        </Route>

        </Switch>
        </div>
    )
}

export default Routes;