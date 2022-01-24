import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Planets = () => {
    const [planet, setPlanet] = useState(null)
    const { id } = useParams()
    const [err, setErr] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res=> {
                console.log(res.data);
                setPlanet(res.data);
            })
            .catch(err=>{
                setPlanet(null)
                console.log(err);
            })
    })
    return (
        <div>
            {
                planet ?
                <div >
                    <h1>Planet Name: {planet.name} </h1>
                    <h2>Climate: {planet.climate}</h2>
                    <h2>Terrain: {planet.terrain}</h2>
                    <h2> Surface Water: {planet.surface_water}</h2>
                    <h2>Population: {planet.population}</h2>
                </div>
                :<h1>Not Available</h1>
            }
        </div>
    )
}

export default Planets