import React, {useState} from "react";

const Person = () => {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirm, setConfirm] = useState("");

    return(
        <div className="container">
            <form>
                <div className="form">
                    <label>First Name:</label>
                    <input onChange={(e)=>setFirstName(e.target.value)} type="text"/>
                    {
                        firstName.length < 2 && firstName.length > 0 ? <p className="text-danger">First name must be at least 2 characters long</p> : null
                    }
                </div>
                <div className="form">
                    <label>Last Name:</label>
                    <input onChange={(e)=>setLastName(e.target.value)} type="text"/>
                    {
                        lastName.length < 2 && lastName.length > 0 ? <p className="text-danger">Last name must be at least 2 characters long</p> : null
                    }
                </div>
                <div className="form">
                    <label>Email:</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text"/>
                    {
                        email.length < 5 && email.length > 0 ? <p className="text-danger">Email must be at least 5 characters long</p> : null
                    }
                </div>
                <div className="form">
                    <label>Password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="text"/>
                    {
                        password.length < 8 && password.length > 0 ? <p className="text-danger">Password must be at least 8 characters long</p> : null
                    }
                </div>
                <div className="form">
                    <label>Confirm Password:</label>
                    <input onChange={(e)=>setConfirm(e.target.value)} type="text"/>
                    {
                        confirm !== password ? <p className="text-danger">Passwords do not match!</p> : null
                    }
                </div>
            </form>
            <hr />
            <p>Your Information:</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
        </div>
    )
}

export default Person;