import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
function App() {
  return (
    <BrowserRouter>
        <Routes>

        <Route path="/" element={<Landing />} />

      </Routes>
       <Routes>

        <Route path="/login" element={<Login />} />

      </Routes>
       <Routes>

        <Route path="/signup" element={<Signup />} />

      </Routes>

      <Routes>

        <Route path="/home" element={<Home />} />

      </Routes>


        <Routes>

        <Route path="/upload" element={<Upload/>} />

      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;