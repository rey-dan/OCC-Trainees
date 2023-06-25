import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Homescreen() {

    const [rooms, setrooms] = useState([]);
    useEffect(async () => {
        try{
            const data = (await axios.get('/api/rooms/getallrooms')).data
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }, [])
    return(
        <div>
            <h1>Home screen</h1>
        </div>
    )
}

export default Homescreen;