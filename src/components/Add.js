import React from 'react';
import '../css/Add.css';
import {useState} from 'react';
const API = "http://localhost:3001/campaigns";

function Add () {

    const [id, setID] = useState(Math.random());
    const [name, setName] = useState("");
    // const [keywaord, setKeyword] = useState("");
    // const [bid, setBid] = useState();
    // const [fund, setFund] = useState("");
    // const [status, setStatus] = useState();
    // const [town, setTown] = useState("");
    // const [radius, setRadius] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name});
        fetch((`${API}`), {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                id: id,
                name: name
            })
        })
    }


    return(
        
        <form>
            <label>Campaign name</label>
            <input type="text" required value = {name} onChange = {(e) => setName(e.target.value)}/>
            <label>Keywords</label>
            <input type="text" />
            <label>Bid amount</label>
            <input type="number" />
            <label>Campaign found</label>
            <input type="text" />
            <label>Status
            <input type="radio" id="radioYes" />
            <label for="range">Yes</label>
            <input type="radio" id="radioNo" />
            <label for="range">No</label>
            </label>
            <label>Town</label>
            <select>
                <option value="">--Please choose town--</option>
                <option value="Krakow">Krakow</option>
                <option value="Gdansk">Gdansk</option>
                <option value="Warszawa">Warszawa</option>
            </select>
            <label>Radius</label>
            <input type="number" />
            <button onClick={handleSubmit} type="submit" >Submit</button> 
        </form>
                
              
    )
}
export default Add;