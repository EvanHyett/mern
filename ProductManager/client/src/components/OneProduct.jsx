import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const OneProduct = () => {
    let [details, setDetails] = useState({});
    const {id} = useParams();

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
    


    return(
        <div>
            <p>{details.title}</p>
            <p>{details.price}</p>
            <p>{details.description}</p>
        </div>
    )
}

export default OneProduct;