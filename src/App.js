import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponents";

import Navbar from "./components/Navbar";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <RoutesComponent />
    </Router>
  );
}
