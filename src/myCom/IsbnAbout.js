import React from 'react'

export const IsbnAbout = (props) => {
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
                    <tr class="table-light">
                        <td>{props.isbnNumber}</td>
                        <td>{props.bookName}</td>
                        <td>Valid</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
