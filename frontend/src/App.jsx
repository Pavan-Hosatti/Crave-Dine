import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from './pages/Home';  // Ensure Home is in the correct path
import NotFound from './pages/NotFound';  // Ensure NotFound is in the correct path
import Success from './pages/Success';  // Ensure Success is in the correct path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/success" element={<Success />} />  {/* Success page after reservation */}
        <Route path="*" element={<NotFound />} />  {/* Catch-all for undefined paths */}
      </Routes>
      <Toaster />  {/* Toast notifications */}
    </Router>
  );
};

export default App;


