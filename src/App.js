import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts";
import Post from "./components/Post";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
