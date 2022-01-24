import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Search = () => {
    const [category, setCategory] = useState('people')
    const [id, setId] = useState("")
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${category}/${id}`);
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Character</label>
                <select onChange={e => setCategory(e.target.value)}>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
                <label>ID</label>
                <input onChange={e => setId(e.target.value)} type='number'/>
                <button>Search</button>
            </form> 
        </div>
    )
}

export default Search