import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./components/NaviBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Users from "./page/Users";
import Comments from "./page/Comments";
import Error from "./page/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<Users />} />
          <Route path="/users/:userId/posts/:postId" element={<Comments />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
