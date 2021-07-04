import SignIn from "./userjourney/signin";
import SignUp from "./userjourney/signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/register" component={SignUp} />
    </Switch>
    </Router>
  );
}

export default App;
