import React from 'react';

const Weather = (data) => {
    return (
        <div className='weather'>
            <div className='weather__temperatures'>
                <span className='temperature'>20</span> <span className='feelslike'>ощущается 18</span>
            </div>
            <div className='weather__image'>
                <img src="" alt="Фоточка" />
            </div>
            <div className='weather__description'>
                Sunny
            </div>
        </div>
    );
};

export default Weather;