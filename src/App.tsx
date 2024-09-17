import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Login from "./ui/pages/login.page";
import HomePage from "../src/ui/pages/home.page"
import Groupe from './ui/pages/groupe.page';
import Module from './ui/pages/module.page';
import Setting from './ui/pages/Settings.page';
import Planning from './ui/pages/planning.page';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/groupe" element={<Groupe />} />
          <Route path="/module" element={<Module />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </Router>
    // <div className="App">
    //   <Login />
    // </div>
  );
}

export default App;
