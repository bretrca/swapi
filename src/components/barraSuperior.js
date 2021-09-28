import React, { useState } from 'react';
import axios from 'axios';


function searchPlanet(planet) {
    /*  const axios = require( 'axios'); */

    return axios.get('http://swapi.dev/api/planets/?search=', {
        params: {
            search: planet,
        }
    })
        .then(function (res) {
            return res.data
        })
        .catch((error) => {
            console.log(error);
        });

}

function BarraSuperior(props) {
    const [input, setInput] = useState('');

    function handleInputChange(event) {
        setInput(event.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();

        searchPlanet(input).then(data => props.setSearchData(data))
            //setSearchData(data));
      
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarColor01" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" value={input} onChange={handleInputChange} />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}
export default BarraSuperior;