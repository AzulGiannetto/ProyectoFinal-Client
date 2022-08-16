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
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("Token")
  );

  useEffect(() => {
    setIsLogged(window.localStorage.getItem("Token"));
  }, [location]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        {/* <Route path="profile" element={<Profile />} /> */}
        <Route
          path="/main"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Blog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <PostMe />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
