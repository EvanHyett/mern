import React, { useEffect, useState } from 'react'
import axios from 'axios';import {Link} from "react-router-dom";

const AllProducts = () => {
    let [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then(response=>{
            console.log("response", response.data.results);
            setProducts(response.data.results);
        })
        .catch(err=>console.log(err))
}, []);

    return(
        <div>
            <h1>All Products:</h1>
                {
                    products.map((product)=>{
                        return(
                            <div key={product._id}>
                                <Link to={(`/products/${product._id}`)}>{product.title}</Link>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default AllProducts;