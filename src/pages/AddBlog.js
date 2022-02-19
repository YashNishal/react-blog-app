import React from "react";
import s from "../css/AddBlog.module.css";
import AddBlogForm from "../components/AddBlogForm/AddBlogForm";
import OuterCard from "../components/OuterCard/OuterCard";
import Card from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPages/AnimatedPages";

export default function AddBlog(props) {
    const navigate = useNavigate();

    function addBlog(blog) {
        console.log(blog);
        fetch(
            "https://react-blog-f5e26-default-rtdb.firebaseio.com/blogs.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blog),
            }
        )
            .then(navigate("/blogs"))
            .then(props.setActiveBtn("blogs"));
    }

    return (    
        <AnimatedPage>
            <OuterCard>
                <h2 className={s.heading}>
                    Add Blog
                </h2>
                <Card>
                    <AddBlogForm addBlog={addBlog} />
                </Card>
            </OuterCard>
        </AnimatedPage>
    );
}
