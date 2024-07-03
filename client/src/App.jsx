import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import { Toaster } from 'react-hot-toast';
import Home from "./components/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={  
              <Home/>
          }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
  
  )
}

export default App
