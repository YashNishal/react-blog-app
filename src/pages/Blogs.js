import React, { useEffect, useState } from "react";
// import s from "./Blogs.module.css";
import Card from "../components/Card/Card";
import BlogItem from "../components/BlogItem/BlogItem";
import OuterCard from "../components/OuterCard/OuterCard";

// const DummyData = [
//     {
//         id: 1,
//         title: "The Complete Guide to Full Stack Web Development",
//         author: "Yash Nishal",
//         desc: "The main network we'll be deploying to is Polygon. I chose Polygon because of its low transaction cost, fast block times, and current network adoption.That being said, we're going to be building on the Ethereum Virtual Machine (EVM), so you can apply these skills to build for dozens of other blockchain networks as well, including Ethereum, Celo, Avalanche, and many others.",
//     },
//     {
//         id: 2,
//         title: "The Complete Guide to Full Stack Web Development",
//         author: "Yash Nishal",
//         desc: "The main network we'll be deploying to is Polygon. I chose Polygon because of its low transaction cost, fast block times, and current network adoption.That being said, we're going to be building on the Ethereum Virtual Machine (EVM), so you can apply these skills to build for dozens of other blockchain networks as well, including Ethereum, Celo, Avalanche, and many others.",
//     },
//     {
//         id: 3,
//         title: "The Complete Guide to Full Stack Web Development",
//         author: "Yash Nishal",
//         desc: "The main network we'll be deploying to is Polygon. I chose Polygon because of its low transaction cost, fast block times, and current network adoption.That being said, we're going to be building on the Ethereum Virtual Machine (EVM), so you can apply these skills to build for dozens of other blockchain networks as well, including Ethereum, Celo, Avalanche, and many others.",
//     },
// ];

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
        <OuterCard>
            {/* <p className={styles.heading}>Blogs route</p> */}
            {isLoading
                ? dummyLoadingScreen()
                : blogs.map((Blog) => (
                      <Card key={Blog.id}>
                          <BlogItem
                              title={Blog.title}
                              author={Blog.author}
                              desc={Blog.desc}
                          />
                      </Card>
                  ))}
        </OuterCard>
    );
}
