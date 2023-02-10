import React from 'react';
import '../css/Home.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const API = "http://localhost:3001/campaigns";

function Home () {

    const [campaign, setCampaign] = useState([]);
    const [refresh, setRefresh] = useState(Math.random())

    const handleRead = () => {
        fetch(`${API}`)
        .then((response) => response.json())
        .then((data) => setCampaign(data)) 
    }

    const handleDelete = (id) => {
        fetch(`${API}/${id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then(() => setRefresh(Math.random()))
    }

    useEffect(() => {
        handleRead();
    }, [refresh])

 
    return (
        <main>
            <h1>Campaigns</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Keywords</th>
                        <th>Bid amount</th>
                        <th>Fund</th>
                        <th>Status</th>
                        <th>Town</th>
                        <th>Radius</th>
                    </tr>
                </thead>
                <tbody>
                    {campaign.map((item) => (
                        <tr>
                            <td key={item.id}>{item.name}</td>
                            <td key={item.id}>{item.keywords}</td>
                            <td key={item.id}>{item.bid}</td>
                            <td key={item.id}>{item.fund}</td>
                            <td key={item.id}>{item.status}</td>
                            <td key={item.id}>{item.town}</td>
                            <td key={item.id}>{item.radius}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={()=> handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to='/add'>
                <button>Add Campaign</button>
            </Link>

        </main>
    )
}

export default Home;