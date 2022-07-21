import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";


const Author = () => {
    let [name, setName] = useState("");
    let [formErrors, setFormErrors] =useState({});
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", {
            name
        })
            .then(response=>{
                console.log("response", response.data)
                if(response.data.errors){
                    setFormErrors(response.data.errors);
                }else{
                    setFormErrors({})
                    navigate('/')
                }
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <Link to={(`/`)} >Home</Link>
            <p>Add a new author:</p>
            <form onSubmit={onSubmitHandler} >
                <label>Name:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} />
                <p className="text-danger">{formErrors.name?.message}</p>
                <button onClick={()=>navigate("/")}>Cancel</button>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Author;