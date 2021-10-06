import React from 'react'

export const IsbnAbout = () => {
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
                    <tr class="table-success">
                        <td>54545454</td>
                        <td>React</td>
                        <td>Valid</td>
                    </tr>
                    <tr class="table-danger">
                        <td>0000</td>
                        <td>React Fake</td>
                        <td>Invalid</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
