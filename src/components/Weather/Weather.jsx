import React from 'react';
import humidityİcon from '../../img/humidity.png';
import windİcon from '../../img/wind.png';

const Weather = (data) => {

    console.log(data);

    return (
        <div className='weather'>
            <div className='weather__temperatures'>
                <span className='temperature'>{data.data.current.temperature}°</span> <span className='feelslike'>feelslike {data.data.current.feelslike}°</span>
            </div>
            <div className='weather__image'>
                <img src={data.data.current.weather_icons} alt="Фоточка" />
            </div>
            <div className='weather__description'>
                {data.data.current.weather_descriptions}
            </div>

            <div className='weather__footer'>
                <div className='weather__humidity'>
                    <div className='humidity-icon'><img src={humidityİcon} /></div>
                    <div className='humidity-description'> <span className='bold'>{data.data.current.humidity}%</span> 
                        <br /> humidity
                    </div>
                </div>

                <div className='weather__wind'>
                    <div className='wind-icon'><img src={windİcon} /></div>
                    <div className='wind-description'> <span className='bold'>{data.data.current.wind_speed} Km/h</span>
                        <br /> wind speed
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Weather;