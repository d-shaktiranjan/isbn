import React from 'react'

export const IsbnAbout = (props) => {
    let checkIsbn = (isbn) => {
        let n = isbn.length;
        if (n !== 10)
            return false;
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            let digit = isbn[i] - '0';

            if (0 > digit || 9 < digit)
                return false;

            sum += (digit * (10 - i));
        }
        let last = isbn[9];
        if (last !== 'X' && (last < '0' || last > '9'))
            return false;

        sum += ((last === 'X') ? 10 : (last - '0'));
        return (sum % 11 === 0);
    }
    let out = checkIsbn(props.isbnNumber);
    let color = "table-" + (out ? "success" : "danger");
    let status = out ? "Valid" : "Invalid";
    return (
        <div className="container">
            <h3 className="text-center">ISBN Details</h3>
            <hr />
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">ISBN Number</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class={color}>
                        <td>{props.isbnNumber}</td>
                        <td>{props.bookName}</td>
                        <td>{status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
