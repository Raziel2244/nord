import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Arena } from "./tools/arena";
import { Breeding } from "./tools/breeding";
import { Cartography } from "./tools/cartography";
import "./App.css";

function App() {
  return (
    <Router>
      <nav id="toolbar">
        <Link to="arena">Arena</Link>
        <Link to="breeding">Breeding</Link>
        <Link to="cartography">Cartography</Link>
      </nav>
      <Switch>
        <Route path="/arena">
          <Arena />
        </Route>
        <Route path="/breeding">
          <Breeding />
        </Route>
        <Route path="/cartography">
          <Cartography />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
