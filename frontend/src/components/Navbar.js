import React,{useEffect} from 'react';
import { Link } from "react-router-dom";
import '../css/navbar.css';

export default function Navbar(props) {

    useEffect(() => {
        const list = document.querySelectorAll(".list");
        function activeLink(){
            list.forEach((item)=>item.addEventListener("click",function(){
                list.forEach((item)=>item.classList.remove("active"));
                this.classList.add("active");
            }));  
        }
        activeLink();
    }, [])
    

    return (
        <>
            <div className="nav">
                <div className="navigation">
                    <ul>
                        <li className="list active">
                            <Link to="/">
                                <span className="icon"><i className="fa-solid fa-house"></i></span>
                                <span className="text">Home</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="/stat">
                                <span className="icon"><i className="fa-solid fa-chart-simple"></i></span>
                                <span className="text">Stat</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="/add">
                                <span className="icon"><i className="fa-solid fa-plus"></i></span>
                                <span className="text">Add</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="/budget">
                                <span className="icon"><i className="fa-solid fa-message"></i></span>
                                <span className="text">Assistant</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="/profile">
                                <span className="icon"><i className="fa-solid fa-user"></i></span>
                                <span className="text">Profile</span>
                            </Link>
                        </li>
                        <div className="indicator">
                            
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}
