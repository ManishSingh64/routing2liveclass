// import logo from './logo.svg';
import "./App.css";
import Feeds from "./Pages/Feeds";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./HOF/RequireAuth";
import Posts from "./Pages/Posts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/feeds"
          element={
            <RequireAuth>
              <Feeds />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/posts"
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
