import React from 'react'
import logo from '../logo.svg';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    ISBN
                </a>
            </div>
        </nav>
    )
}
