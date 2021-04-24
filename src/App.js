import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-pagination-library/build/css/index.css";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
