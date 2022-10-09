import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Skywalker = () => {
    let [data, setData] = useState("");
    let [id, setID] = useState("");
    let [dataList, setDataList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https:swapi.dev/api/")
        .then(response=>{
            setDataList(Object.keys(response.data));
            console.log(response)
        })
        .catch(err=>{
            console.log("Something went wrong fetching from the api", err)
        })
    }, [])

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/{data}/{id}');
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="dataItem">Search For Star Wars Info:</label>
                    <select>
                        {
                            dataList.map((dataObj, i) => {
                                return(<>
                                    {console.log(dataList)}
                                    <option key={i} value={dataObj}>{dataObj}</option>
                                </>)
                            })
                        }
                    </select>
                    <label>ID: </label>
                    <input type="number" onChange={(e)=>setID(e.target.value)} />
                    <button>Search</button>
                </div>
            </form>
        </>
    )





}

export default Skywalker;