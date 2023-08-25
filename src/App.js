import { Route, Routes } from 'react-router-dom';
import './CSS/index.css';
// import pages
import Home from './Pages/Home';
import Detail from './Pages/Detail';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:coinId" element={<Detail />} />
            </Routes>
        </div>
    );
}

export default App;
