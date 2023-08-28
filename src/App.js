import { Route, Routes, useNavigate } from 'react-router-dom';
import './CSS/index.css';
// import pages
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import { ThemeProvider, keyframes, styled } from 'styled-components';
import { useState } from 'react';
import { darkTheme, lightTheme } from './themes';
import { FaBackward, FaRegMoon, FaSun } from 'react-icons/fa';

const backAnimation = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-20px);
    }
`;

const GoBackBtn = styled.button`
    position: fixed;
    top: 24px;
    left: 24px;
    font-size: 36px;
    color: ${(props) => props.theme.accent_dark};
    &:hover {
        animation: ${backAnimation} 1.2s linear infinite;
    }
`;

const btnAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const ThemeToggleBtn = styled.button`
    position: fixed;
    bottom: 24px;
    left: 24px;
    font-size: 36px;
    color: ${(props) => props.theme.accent_dark};
    &:hover {
        animation: ${btnAnimation} 2s linear infinite;
    }
`;

function App() {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) =>
            prevTheme === lightTheme ? darkTheme : lightTheme
        );
    };

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={currentTheme}>
            <div style={{ position: 'relative' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/detail/:coinId"
                        element={<Detail currentTheme={currentTheme} />}
                    />
                </Routes>
                <GoBackBtn
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    <FaBackward />
                </GoBackBtn>
                <ThemeToggleBtn onClick={toggleTheme}>
                    {currentTheme === lightTheme ? <FaRegMoon /> : <FaSun />}
                </ThemeToggleBtn>
            </div>
        </ThemeProvider>
    );
}

export default App;
