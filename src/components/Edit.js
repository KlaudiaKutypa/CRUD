import React from 'react';
import '../css/Edit.css';
import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
const API = "http://localhost:3001/campaigns/";

function Edit () {

    const {campid} = useParams();

    const [id, setID] = useState();
    const [name, setName] = useState("");
    const [keywords, setKeywords] = useState("");
    const [bid, setBid] = useState();
    const [fund, setFund] = useState("");
    const [status, setStatus] = useState();
    const [town, setTown] = useState("");
    const [radius, setRadius] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3001/campaigns/"+ campid)
        .then((response) => response.json())
        .then((data) => {
            setName(data.name);
            setKeywords(data.keywords);
            setBid(data.bid);
            setFund(data.fund);
            setStatus(data.status);
            setTown(data.town);
            setRadius(data.radius);
        }) 
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(("http://localhost:3001/campaigns/"+ campid), {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
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
        <div className="edit-campaign">
        <h1>Edit Campaign</h1>
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
                <button type="submit">Update</button> 
                <Link to='/'>
                    <button >Back</button> 
                </Link>
            </div>
        </form>
        </div>
    )
}
export default Edit;