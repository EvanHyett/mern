import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(0);
    let [description, setDescription] = useState("");
    let [formErrors, setFormErrors] =useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then(response=>{
                console.log("response", response.data)
                if(response.data.errors){
                    setFormErrors(response.data.errors);
                }else{
                    setFormErrors({})
                }
            })
            .catch(err=>console.log(err))
    }

    return (
        <>
            <div className="form">
                <h1>Product Manager</h1>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label>Title: </label>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
                        <p className="text-danger">{formErrors.title?.message}</p>
                    </div>
                        <label>Price: </label>
                        <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} />
                        <p className="text-danger">{formErrors.price?.message}</p>
                    <div>
                        <label>Description: </label>
                        <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} />
                        <p className="text-danger">{formErrors.description?.message}</p>
                    </div>
                    <div>
                        <input type="submit" value="Create" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;