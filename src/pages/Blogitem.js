import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPages/AnimatedPages";

function Blogitem() {
    let navigate = useNavigate();
    let { id } = useParams();

    const style = {
        color: "#fff",
    };

    return (
        <AnimatedPage>
            <div style={style}>
                <h1>blogItem with id : {id}</h1>

                <button onClick={() => navigate("/blog")}>
                    Navigate to blogs page
                </button>
            </div>
        </AnimatedPage>
    );
}

export default Blogitem;
