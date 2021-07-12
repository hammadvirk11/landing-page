import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/AuthorProfile/Profile";
import ProductUpload from "./Pages/ProductUpload/ProductUpload";
import SignIn from "./userjourney/signin";
import SignUp from "./userjourney/signup";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/product" component={ProductUpload} />


    </Router>
  );
}
export default App;
