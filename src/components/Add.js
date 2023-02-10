import React from 'react';
import '../css/Add.css';

function Add () {

    return(
        <form>
            <label>Campaign name</label>
            <input type="text" required />
            <label>Keywords</label>
            <input type="text" required />
            <label>Bid amount</label>
            <input type="number" required />
            <label>Campaign found</label>
            <input type="text" required />
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
            <input type="number" required />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Add;