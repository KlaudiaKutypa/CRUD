import React from 'react';
import '../css/Add.css';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
const API = "https://my-json-server.typicode.com/KlaudiaKutypa/CRUD/campaigns/";

function Add () {

    const [id, setID] = useState(Math.random());
    const [name, setName] = useState("");
    const [keywords, setKeywords] = useState("");
    const [bid, setBid] = useState();
    const [fund, setFund] = useState("");
    const [status, setStatus] = useState();
    const [town, setTown] = useState("");
    const [radius, setRadius] = useState();
    const navigate = useNavigate();

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
                name: name,
                keywords: keywords,
                bid: bid,
                fund: fund,
                status: status,
                town: town,
                radius: radius
            })
            }).then((res) => {
                navigate('/');
        })
    }


    return(
        <div className="add-campaign">
        <div className="header">
        <h1>Add Campaign</h1>
        </div>
        <form onSubmit={handleSubmit} >
            <label>Campaign name</label>
            <input type="text" required value = {name} onChange = {(e) => setName(e.target.value)}/>
            <label>Keywords</label>
            <input type="text" required value = {keywords} onChange = {(e) => setKeywords(e.target.value)}/>
            <label>Bid amount</label>
            <input type="number" required value = {bid} onChange = {(e) => setBid(e.target.value)}/>
            <label>Campaign found</label>
            <input type="text" required value = {fund} onChange = {(e) => setFund(e.target.value)}/>
            <fieldset required value={status}  onChange = {(e) => setStatus(e.target.value)}>
                <legend>Status</legend>
                <input type="radio" id="on"></input>
                <label for="on">On</label>
                <input type="radio" id="off"></input>
                <label for="off">Off</label>
            </fieldset>
            <label>Town</label>
            <select required value = {town} onChange = {(e) => setTown(e.target.value)}>
                <option value="">--Please choose town--</option>
                <option value="Krakow">Krakow</option>
                <option value="Gdansk">Gdansk</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Wroclaw">Wroclaw</option>
                <option value="Poznan">Poznan</option>
            </select>
            <label>Radius in km</label>
            <input type="number" required value = {radius} onChange = {(e) => setRadius(e.target.value)}/>
            <div className="form-buttons">
                <button className="btn-submit" type="submit">Submit</button> 
                <Link to='/'>
                    <button className="btn-back" >Back</button> 
                </Link>
            </div>
        </form>
        </div>
    )
}

export default Add;