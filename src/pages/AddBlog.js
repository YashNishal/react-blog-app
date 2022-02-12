import React from "react";
import s from "./AddBlog.module.css";
import AddBlogForm from "../components/AddBlogForm/AddBlogForm";
import OuterCard from "../components/OuterCard/OuterCard";
import Card from "../components/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


export default function AddBlog() {
    const navigate = useNavigate()

    function addBlog(blog) {
        console.log(blog);
        fetch(
            "https://react-blog-f5e26-default-rtdb.firebaseio.com/blogs.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify(blog)
            }
        )
        .then(
            navigate('/blogs')
        )
    }

    return (
        <OuterCard>
            <h2 class={s.heading}>Add Blog <FontAwesomeIcon icon="fa-solid fa-file-circle-plus" color="white"/></h2>
            <Card>
                <AddBlogForm addBlog={addBlog}/>
            </Card>
        </OuterCard>
    );
}
