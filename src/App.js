import "./App.css";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <h2>Logo</h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
