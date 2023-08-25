import { Route, Routes } from 'react-router-dom';
import './CSS/index.css';
// import pages
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import { useQuery } from '@tanstack/react-query';
import { getCoinData } from './api';

function App() {
    const { data, isLoading } = useQuery(['coins', 'coins-data'], getCoinData);

    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<Home coin={data} isLoading={isLoading} />}
                />
                <Route
                    path="/detail/:coinId"
                    element={<Detail coin={data} isLoading={isLoading} />}
                />
            </Routes>
        </div>
    );
}

export default App;
