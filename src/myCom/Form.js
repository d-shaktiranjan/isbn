import React, { useState } from 'react'
import { IsbnAbout } from './IsbnAbout.js';

export const Form = () => {
    let handelClick = () => {
        changeClick(true);
    }
    let valueChange = (e) => {
        setNumber(e.target.value)
    }
    const [isbnNumber, setNumber] = useState(null);
    const [isClicked, changeClick] = useState(false);
    return (
        <div className="container mt-3">
            <div className="mb-3">
                <label htmlFor="isbnNumber" className="form-label">ISBN Number</label>
                <input type="text" value={isbnNumber} onChange={valueChange} className="form-control" id="isbnNumber" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="saveCheck" disabled />
                <label className="form-check-label" htmlFor="saveCheck">Save This</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handelClick}>Check</button>
            <hr />
            {isClicked === true && <IsbnAbout isbnNumber={isbnNumber} bookName="Not Given" />}
        </div>
    )
}
