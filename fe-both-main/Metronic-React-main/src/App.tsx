import Dashboard from "./pages/Dashboard.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ViewNodes from "./pages/ViewNodes.jsx";
import ViewModels from "./pages/ViewModels.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/ViewNodes" element={<ViewNodes />} />
        <Route path="/ViewModals" element={<ViewModels />} />


      </Routes>
    </Router>
  );
}

export default App;
