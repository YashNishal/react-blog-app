import NavStyle from "./navbar.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavIcon } from "../NavIcon/NavIcon";

function Navbar(props) {
    const [navOpt, setNavOpt] = useState(0);

    const toggleNavopt = () => {
        if (navOpt === 0) setNavOpt(1);
        else setNavOpt(0);
    };

    const [icon,setIcon] = useState(false);
    
    const reloadIcon = () => {
        setIcon(!icon);
        props.setActiveBtn("home");
    }

    return (
        <nav className={NavStyle.navbar}>
            {/* <div className={NavStyle.heading}>Blog</div> */}
            <Link to="/" onClick={reloadIcon} className={NavStyle.heading}>
                <NavIcon key={icon}/>  
                {/* <motion.img
                    
                    src={logo}
                    width="50px"
                    height="50px"
                    alt="icon"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }} */}
            </Link>
            {/* <div className={NavStyle.heading}><FontAwesomeIcon icon="fa-solid fa-typewriter"  style={{color: 'white', fontSize: '50px'}} /></div> */}
            <ul
                className={` ${
                    navOpt ? NavStyle.nav_opts_on : NavStyle.nav_opts
                } `}
            >
                <li>
                    <Link
                        to="/"
                        className={
                            props.activeBtn === "home" ? NavStyle.active : ""
                        }
                        onClick={() => props.setActiveBtn("home")}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/blogs"
                        className={
                            props.activeBtn === "blogs" ? NavStyle.active : ""
                        }
                        onClick={() => props.setActiveBtn("blogs")}
                    >
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link
                        to="/add-blog"
                        className={
                            props.activeBtn === "addBlog" ? NavStyle.active : ""
                        }
                        onClick={() => props.setActiveBtn("addBlog")}
                    >
                        Add Blog
                    </Link>
                </li>
            </ul>

            <button
                id="toggle-navbar"
                className={NavStyle.toggler}
                onClick={() => toggleNavopt()}
            >
                <svg width="26" height="14" fill="#fff">
                    <path d="M13.4999996 13.9214282L.6 1.17499997 1.82857139.1 13.4999996 11.7714282 25.1714278.1l1.2285714 1.07499997z"></path>
                </svg>
            </button>
        </nav>
    );
}

export default Navbar;
