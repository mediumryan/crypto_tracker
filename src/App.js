import { Route, Routes } from 'react-router-dom';
import './CSS/index.css';
// import pages
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme } from './themes';
import Header from './Components/Header/Header';

function App() {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    return (
        <ThemeProvider theme={currentTheme}>
            <div style={{ position: 'relative' }}>
                <Header
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/detail/:coinId"
                        element={<Detail currentTheme={currentTheme} />}
                    />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
