import "./App.css";
import Navbar from "./components/navbar/navbar";
import AddBlog from "./pages/AddBlog";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Blogs from "./pages/Blogs";
// import Blogitem from "./pages/Blogitem";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
    const [activeBtn, setActiveBtn] = useState("home");
    const location = useLocation();

    useEffect(() => {
   document.title = "React Blog App"
}, []);
    
    return (
        <div className="App">
            <Navbar activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
            <main className="width">
                <AnimatePresence exitBeforeEnter>
                    <Routes key={location.pathname} location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route
                            path="/add-blog"
                            element={<AddBlog setActiveBtn={setActiveBtn} />}
                        />
                    </Routes>
                </AnimatePresence>
            </main>
        </div>
    );
}

export default App;
