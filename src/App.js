import { useState } from 'react';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';
import './styles/app.scss';

function App() {
        
    const [data, setData] = useState();
   
    return (
        <div className="App">
           <Search data={data} />
           <Weather data={data} />
        </div>
    );
}

export default App;
