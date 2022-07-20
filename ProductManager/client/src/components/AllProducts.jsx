import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";


const AllProducts = () => {
    let [products, setProducts] = useState([]);
    let [newList, setNewList] = useState(true);

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then(response=>{
            console.log("response", response.data.results);
            setProducts(response.data.results);
            setNewList(!newList)
        })
        .catch(err=>console.log(err))
    }, [newList]);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response =>{
                console.log(response.data.product)
                setNewList(!newList)
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>All Products:</h1>
                {
                    products.map((product)=>{
                        return(
                            <div key={product._id}>
                                <Link to={(`/products/${product._id}`)}>{product.title}</Link>
                                <button onClick={() => deleteProduct(`${product._id}`)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default AllProducts;