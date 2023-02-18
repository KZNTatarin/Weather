import React, { useEffect, useState } from 'react';
import markMap from '../../img/map_mark.png';
import lupa from '../../img/lupa.png';


const Search = (props) => {

    const [city, setCity] = useState()

    const link = `http://api.weatherstack.com/current?access_key=f577316db0db8e1ab45411e4deb76c6e&query=${city}`

    const fetchData = async () => {

        new Promise(async (resolve, reject) => {
            props.setStatus('loading')

            const result = await fetch(link);
            const data = await result.json();

            if (data.current) {
                resolve(data);
            } else if (!data.current) {
                reject('error');
            }
        })
            .then((result) => {
                props.setData(result)
                props.setStatus('success')
            })
            .catch((error) => {
                props.setStatus(error)
            })
    }

    return (
        <div>
            <div className='search'>
                <img src={markMap} alt="Бебра" />
                <input
                    placeholder='Enter Location'
                    className='search-input'
                    onChange={e => setCity(e.target.value)}
                    value={city} />
                <button className='search-button' onClick={fetchData}><img src={lupa} alt="" /></button>
            </div>
        </div>
    );
};

export default Search;