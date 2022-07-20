import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const OneProduct = () => {
    let [details, setDetails] = useState({});
    const {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log("response", response.data.product)
            setDetails(response.data.product)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [id]);
    
    const onSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                console.log("response", response.data.product)
                navigate(`/products/update/${id}`)
            })
            .catch(err=>{
                console.log("couldn't get it", err)
            })
    }

    const deleteProduct = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => console.log(response.data.product))
            .catch(err => console.log(err))
        navigate("/api")
    }


    return(
        <div>
            <p>{details.title}</p>
            <p>{details.price}</p>
            <p>{details.description}</p>
            <button onClick={onSubmit} >Update</button>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default OneProduct;