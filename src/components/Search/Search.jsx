import React, { useState } from 'react';


const Search = () => {

    const [city, setCity] = useState('')

    const link = `http://api.weatherstack.com/current?access_key=69b3b6a36f2fb6f2ca40050bdef14b57&query=${city}`

    const fetchData = async (e) => {
        e.preventDefault()
        const result = await fetch(link);
        const data = await result.json();

        console.log(data);
    }

    return (
        <div>
            <form>
                <input
                    onChange={e => setCity(e.target.value)}
                    value={city} />
                <button onClick={fetchData} type="">Найти</button>
            </form>
        </div>
    );
};

export default Search;