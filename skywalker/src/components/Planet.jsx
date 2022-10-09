import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Planet(props) {

    const [planet, setPlanet] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planet/${props.id}`)
            .then(response=> console.log(response.data) )
            .then(response=> setPlanet(response.data) )
            .catch(err => console.log(err) )
    }, [props.id])

    return (
        <div>
            <h2>Name: {planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrian: {planet.terrian}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Resident: {planet.residents}</p>
        </div>
    )
}

export default Planet