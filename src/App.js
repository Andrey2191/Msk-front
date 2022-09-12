import "./App.css";
import Create from "./components/create/create";
import Read from "./components/read/read";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <div>
          <Route exact path="/" component={Create} />
        </div>

        <div style={{ marginTop: 20 }}>
          <Route exact path="/read" component={Read} />
        </div>
      </div>
    </Router>
  );
}

export default App;
