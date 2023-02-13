import React from 'react';
import '../css/Home.css';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const API = "http://localhost:3001/campaigns";

function Home () {

    const [campaign, setCampaign] = useState([]);
    const [refresh, setRefresh] = useState(Math.random());
    const navigate = useNavigate();

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

    const handleEdit = (id) => {
        navigate("/edit/" + id)
    }

    useEffect(() => {
        handleRead();
    }, [refresh])

 
    return (
        <main>
            <h1>ChocoLaTe Company Campaigns</h1>
            <div className="button-add">
            <Link to='/add'>
                <button>Add Campaign</button>
            </Link>
            </div>
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {campaign.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.keywords}</td>
                            <td>{item.bid}</td>
                            <td>{item.fund}</td>
                            <td>{item.status}</td>
                            <td>{item.town}</td>
                            <td>{item.radius}</td>
                            <td>
                                <button onClick={()=> handleEdit(item.id)}>Edit</button>
                                <button onClick={()=> handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default Home;