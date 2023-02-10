import React from 'react';
import '../css/Home.css';
import {useState, useEffect} from 'react';

const API = "http://localhost:3001/campaigns";

function Home () {

    const [campaign, setCampaign] = useState([]);

    useEffect(() => {
        fetch(`${API}`)
        .then((response) => response.json())
        .then((data) => setCampaign(data)) 
    }, [])

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
                            <td>{item.name}</td>
                            <td>{item.keywords}</td>
                            <td>{item.bid}</td>
                            <td>{item.fund}</td>
                            <td>{item.status}</td>
                            <td>{item.town}</td>
                            <td>{item.radius}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button>Add Campaign</button>
        </main>
    )
}

export default Home;