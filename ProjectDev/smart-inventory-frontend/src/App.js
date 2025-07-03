import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InventoryPage from './components/InventoryTable';
import Dashboard from './components/Dashboard';
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

         {/* Main routes */}
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/inventory" element={<InventoryPage />} />

          {/* Optional: Fallback route for unknown paths */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
