import Navi from "./pages/navi"
import Home from "./pages/home"
import About from "./pages/about"
import Upload from "./pages/upload"
import Update from "./pages/update"
import Login from "./pages/login"
import Menu from "./pages/menu"
import Location from "./pages/location"
import Register from "./pages/register"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navi/>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
