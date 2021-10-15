import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Arena, Breeding, Cartography } from "./tools";
import "./App.css";

function App() {
  return (
    <div id="app">
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
    </div>
  );
}

export default App;
