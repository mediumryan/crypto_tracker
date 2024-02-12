import { styled } from 'styled-components';
// import components
import GoBack from './GoBack';
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid ${(props) => props.theme.accent};
    padding: 0 1rem 1rem 1rem;
`;

const HeaderLogo = styled.div`
    font-size: 1.15rem;
    font-weight: 700;
    font-style: italic;
    color: ${(props) => props.theme.accent};
`;

export default function Header({ currentTheme, setCurrentTheme }) {
    const navigate = useNavigate();

    return (
        <HeaderWrapper>
            <GoBack />
            <HeaderLogo onClick={() => navigate('/')}>Ryan Coins</HeaderLogo>
            <ThemeToggle
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
            />
        </HeaderWrapper>
    );
}
