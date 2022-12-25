import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [posts, setposts] = useState([]);
    let navigate = useNavigate()
    useEffect(() => {
        let user = localStorage.getItem('user')
        if (!user) {
            navigate("/login")
        }
        else {
            GetPostList();
        }
    })


    async function GetPostList() {
        let res = await fetch("http://localhost:5000/post/getallpost")
        res = await res.json()
        setposts(res.data)
    }

    return (
        <div>
            <h1>Posts</h1>
            {posts.length > 0 ? <div className="list-group" style={{display : "flex" , justifyContent: "center" , alignItems : "center"}}>
                {posts.map((item) => {
                    return (
                        <div className="card list-group-item" style={{width: "25rem" , marginBottom: "10px"}}>
                            <img src={item.photo} className="card-img-top" alt="Post img"/>
                                <div className="card-body">
                                    <h2 className="card-text">{item.caption}</h2>
                                    <h5 className="card-text">Posted by - {item.userId.Name}</h5>
                                </div>
                        </div>
                    )
                })}
            </div> : <div>No
                Posts are there</div>}

        </div>
    )
}

export default Home