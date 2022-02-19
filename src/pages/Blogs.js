import React, { useEffect, useState } from "react";
// import s from "./Blogs.module.css";
import Card from "../components/Card/Card";
import BlogItem from "../components/BlogItem/BlogItem";
import OuterCard from "../components/OuterCard/OuterCard";
import AnimatedPage from "../components/AnimatedPages/AnimatedPages";
import { AnimateSharedLayout, motion } from "framer-motion";

export default function Blogs() {
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch(
            "https://react-blog-f5e26-default-rtdb.firebaseio.com/blogs.json/",
            {
                method: "GET",
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setBlogs(Object.values(data));
                console.log(data)
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function dummyLoadingScreen() {
        const dummyList = [];
        for (let i = 0; i < 3; i++) {
            dummyList.push(<Card dummy={isLoading} key={-i}></Card>);
        }
        return dummyList;
    }

    return (
        <AnimatedPage>
            <OuterCard>
                <AnimateSharedLayout>
                    {isLoading
                        ? dummyLoadingScreen()
                        : blogs.map((Blog) => (
                              <motion.div layout  key={Blog.id}>
                                  <Card>
                                      <BlogItem
                                          title={Blog.title}
                                          author={Blog.author}
                                          desc={Blog.desc}
                                          id={Blog.id}
                                      />
                                  </Card>
                              </motion.div>
                          ))}
                </AnimateSharedLayout>
            </OuterCard>
        </AnimatedPage>
    );
}
