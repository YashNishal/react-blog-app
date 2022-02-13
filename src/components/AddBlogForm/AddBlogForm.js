import React, { useRef } from "react";
import s from "./AddBlogForm.module.css";

export default function AddBlogForm(props) {
    const authorInputRef = useRef();
    const titleInputRef = useRef();
    const contentInputRef = useRef();
    

    function submitHandler(event) {
        event.preventDefault();

        const blog = {
            author : authorInputRef.current.value,
            title : titleInputRef.current.value,
            desc : contentInputRef.current.value,
            id : authorInputRef.current.value +" "+ Date.now()
        }

        props.addBlog(blog)
    }

    return (
        <div className={s.form} onSubmit={submitHandler}>
            <form className={s.control}>
                <div className={s.Author}>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        required
                        id="author"
                        placeholder="name"
                        ref={authorInputRef}
                    />
                </div>
                <div className={s.control}>
                    <label htmlFor="title">Blog Title</label>
                    <input
                        type="text"
                        required
                        id="title"
                        ref={titleInputRef}
                    />
                </div>
                <div className={s.control}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        required
                        name="content"
                        rows="15"
                        ref={contentInputRef}
                    ></textarea>
                </div>
                <div className={s.actions}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}
