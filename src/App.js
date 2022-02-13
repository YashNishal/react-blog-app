import "./App.css";
import Navbar from "./components/navbar/navbar";
import AddBlog from "./pages/AddBlog";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Blogitem from "./pages/Blogitem";
import { useState } from "react";

function App() {

    const [activeBtn,setActiveBtn] = useState("home")

    
    return (
        <div className="App">
            <Navbar activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
            <main className="width">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/add-blog" element={<AddBlog setActiveBtn={setActiveBtn}/>} />

                    <Route path="/blog/:id" element={<Blogitem />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
