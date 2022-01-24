import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const People = () => {
    const [person, setPerson] = useState(null)
    const { id } = useParams()
    const [err, setErr] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res=>{
                console.log(res.data);
                setPerson(res.data);
            })
            .catch(err=>{
                setPerson(null)
            })
    })

    return (
        <div>
            {
                person ?
                <div>
                    <h1>Name: {person.name} </h1>
                    <h2>Height: {person.height} cm</h2>
                    <h2>Mass: {person.mass}</h2>
                    <h2>Hair Color: {person.hair_color}</h2>
                    <h2>Skin Color: {person.skin_color}</h2>
                </div>
                :<h1>Not Available</h1>
            }
        </div>
    )
}

export default People