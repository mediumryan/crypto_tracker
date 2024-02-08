import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, styled } from 'styled-components';
import { useState } from 'react';
// import style
import './CSS/index.css';
// import pages
import Home from './Pages/Home';
import Detail from './Pages/Detail';
// import themes
import { lightTheme } from './themes';
// import components
import Header from './Components/Header/Header';

const MainWrapper = styled.main`
    padding: 2rem;
    background-color: ${(props) => props.theme.bg_dark};
`;

function App() {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    return (
        <ThemeProvider theme={currentTheme}>
            <MainWrapper>
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
            </MainWrapper>
        </ThemeProvider>
    );
}

export default App;
