import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/login";
import Signup from "./components/signup";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Dashboard from "./components/Dashboard";
import Profile from './components/Profile'
// import Profile from "./views/Profile";
// import Statistics from "./views/Statistics";
// import API from "./views/API";
import HeaderTop from "./components/header";
import LeftMenu from "./components/left-navigation";
// import Payments from "./views/Payments";
// import DashboardPrivate from "./views/DashboardPrivate";
// import Security from "./views/Security";
// import Media from "./views/Media";
// import Products from "./views/Products";
// import Billing from "./views/Billing";
// import Taxes from "./views/Taxes";
class App extends Component {
  componentDidMount() {}
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <section>
          <Switch>            
              <Route exact path="/" component={Login} /> 
              <Route exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/Dashboard" component={Dashboard}/>
              <PrivateRoute exact path="/Profile" component={Profile}/>
            </Switch>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
