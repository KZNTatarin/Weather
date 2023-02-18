import { useState } from 'react';
import Loader from './components/Loader/Loader';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';
import './styles/app.scss';

function App() {

    const [data, setData] = useState();
    const [status, setStatus] = useState('default');

    return (
        <div className="App">
            <Search setStatus={setStatus} setData={setData} />
            {status === 'loading' && <Loader />}
            {status === 'error' && <h2 style={{ color: '#8e8e8e', margin:'20px 0' }}>Упс, произошла ошибка. Попробуйте снова или повторите позже.</h2>}
            {status === 'success' && <Weather data={data} />}
        </div>
    );
}

export default App;
