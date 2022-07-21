import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

const Main = () => {
    let [authors, setAuthors] = useState([]);
    let [toggle, setToggle] = useState(true);
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then(response=>{
            console.log("response", response.data.results);
            setAuthors(response.data.results);
        })
        .catch(err=>console.log(err))
    }, [toggle])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(response =>{
                console.log(response.data.product)
                setToggle(!toggle)
            })
            .catch(err => console.log(err))
    }

    return(
        <>
            <h1>Favorite Authors</h1>
            <Link to={(`api/author`)} >Add an Author</Link>
            <p>We have quotes by:</p>
            {
                authors.map((author)=>{
                    return(
                        <div key={author._id}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Author</th>
                                        <th scope="col">Actions Available</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{author.name}</td>
                                        <td>
                                            <button onClick={() => navigate(`/api/author/update/${author._id}`)}>Edit </button>
                                            <button onClick={() => deleteAuthor(`${author._id}`)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Main;

