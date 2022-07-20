import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router";

const UpdateProduct = () => {
    // let [title, setTitle] = useState("");
    // let [price, setPrice] = useState(0);
    // let [description, setDescription] = useState("");
    let [details, setDetails] = useState({});
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log("response", response.data.product);
            setDetails(response.data.product);
        })
        .catch(err=>console.log(err))
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`, details)
            .then(response=>{
                console.log("response", response.data)
            })
            .catch(err=>console.log(err))
        navigate(`/products/${id}`)
    }

    const changeHandler = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Update: {details.title}</h1>
                    <label htmlFor="title">Title: </label>
                    <input type="text" onChange={changeHandler} name="title" value={details.title}></input>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" onChange={changeHandler} name="price" value={details.price}></input>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" onChange={changeHandler} name="description" value={details.description}></input>
                </div>
                <input type="submit" value="Update"></input>
            </form>
        </div>
    )
}

export default UpdateProduct;