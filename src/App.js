import SignIn from "./userjourney/signin";
import SignUp from "./userjourney/signup";
import Home from "./Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/register" component={SignUp} />
    </Switch>
    </Router>
  );
}

export default App;
