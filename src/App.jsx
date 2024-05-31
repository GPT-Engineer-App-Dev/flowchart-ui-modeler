import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AppSection from "./pages/AppSection.jsx";
import TaskManager from "./pages/TaskManager.jsx";
import AttemptExplorationRunner from "./pages/AttemptExplorationRunner.jsx";
import Legend from "./pages/Legend.jsx";
import MainChatThreads from "./pages/MainChatThreads.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/app-section" element={<AppSection />} />
        <Route exact path="/task-manager" element={<TaskManager />} />
        <Route exact path="/attempt-exploration-runner" element={<AttemptExplorationRunner />} />
        <Route exact path="/legend" element={<Legend />} />
        <Route exact path="/main-chat-threads" element={<MainChatThreads />} />
      </Routes>
    </Router>
  );
}

export default App;