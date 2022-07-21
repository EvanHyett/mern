import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import {Link, useNavigate} from "react-router-dom";

const EditAuthor = () => {
    let [name, setName] = useState({});
    let [formErrors, setFormErrors] =useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(response=>{
            console.log("response", response.data.author);
            setName(response.data.author);
        })
        .catch(err=>console.log(err))
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/update/${id}`, name)
            .then(response=>{
                console.log("response", response)
                // console.log("response", response.data.author)
                if(response.data.error.errors){
                    setFormErrors(response.data.error.errors);
                }else{
                    setFormErrors({})
                    
                }
            }, navigate('/'))
            .catch(err=>console.log(err))
    }

    const changeHandler = (e) => {
        setName({
            ...name,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <Link to={(`/`)} >Home</Link>
            <p>Edit this author:</p>
            <form onSubmit={onSubmit} >
                <label>Name:</label>
                <input type="text" onChange={changeHandler} name="name" value={name.name} />
                <p className="text-danger">{formErrors.name?.message}</p>
                <button onClick={()=>navigate("/")}>Cancel</button>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default EditAuthor;