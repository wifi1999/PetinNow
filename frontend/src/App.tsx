import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state: any) => state.auth.user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/" element={user ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
