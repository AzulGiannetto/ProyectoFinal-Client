import "./App.css";
// import Home from "./pages/Post/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Homepage from "./pages/Homepage/Homepage";
import Main from "./pages/main/Main";
import Blog from "./pages/Blog/Blog";
import { useLocation } from "react-router-dom";
import PostMe from "./pages/Post/PostMe";
import ProtectedRoute from "./routes/PrivateRoutes";
import { useEffect, useState } from "react";
import Profile from "./pages/Profile/Profile";
function App() {
  const location = useLocation();
  const [email, setEmail] = useState(window.localStorage.getItem("Email"));

  useEffect(() => {
    setEmail(window.localStorage.getItem("Email"));
  }, [location]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute email={email}>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="main"
          element={
            <ProtectedRoute email={email}>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route
          path="feed"
          element={
            <ProtectedRoute email={email}>
              <Blog />
            </ProtectedRoute>
          }
        />
        <Route
          path="post"
          element={
            <ProtectedRoute email={email}>
              <PostMe />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
