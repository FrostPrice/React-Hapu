import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navBar">
                    <ul className="navBarLeft">
                        <img src={require("./Images/hapu_green_logo.png")} alt="Hapu Green Logo" className="hapuGreen"/>
                        <li className="navLink"><a href="https://www.jungle.rocks/login">Create Your Nanny Share</a></li>
                        <li><a href="https://www.jungle.rocks/login">Browse Nanny Shares</a></li>
                        <li><a href="https://www.jungle.rocks/login">Our Story</a></li>
                    </ul>  
                    <ul className="navBarRight">
                        <li>
                            <a href="https://www.jungle.rocks/login">
                                <button className="shareHostButton">Become A Nanny Share Host</button>
                            </a>
                        </li>
                        <li><a href="https://www.jungle.rocks/login">Sign In</a></li>                 
                    </ul>
                </nav>
                    <div className="menuContent">
                        <h1>Become a nanny share host</h1>
                        <p>Reduce costs, increase incomes and change childcare forever</p>
                    </div>
            </header>
        );
    }
}

export default Header;