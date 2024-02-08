import { keyframes, styled } from 'styled-components';
// import themes
import { darkTheme, lightTheme } from '../../themes';
// import icons
import { FaRegMoon, FaSun } from 'react-icons/fa';

const ThemeToggleBtnAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const ThemeToggleBtn = styled.button`
    font-size: 1.15rem;
    color: ${(props) => props.theme.accent_dark};
    &:hover {
        animation: ${ThemeToggleBtnAnimation} 2s linear infinite;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        top: 0.5rem;
    }
`;

export default function ThemeToggle({ currentTheme, setCurrentTheme }) {
    const toggleTheme = () => {
        setCurrentTheme((prevTheme) =>
            prevTheme === lightTheme ? darkTheme : lightTheme
        );
    };

    return (
        <ThemeToggleBtn onClick={toggleTheme}>
            {currentTheme === lightTheme ? <FaRegMoon /> : <FaSun />}
        </ThemeToggleBtn>
    );
}
