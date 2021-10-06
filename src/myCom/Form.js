import React, { useState } from 'react'
import { IsbnAbout } from './IsbnAbout.js';
import { Alert } from './Alert.js';

export const Form = () => {
    let handelClick = () => {
        if (isbnNumber === null) {
            changeAlert(true);
            return;
        }
        if (isbnNumber.length === 10) {
            changeClick(true);
        } else {
            changeAlert(true);
        }
    }

    let valueChange = (e) => {
        changeAlert(false);
        setNumber(e.target.value)
        changeClick(false);
    }

    const [isbnNumber, setNumber] = useState(null);
    const [isClicked, changeClick] = useState(false);
    const [showAlert, changeAlert] = useState(false);
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
            {showAlert === true && <Alert title="Try Again" about="ISBN Number must be 10 digits" isSuccess={false} />}
        </div>
    )
}
