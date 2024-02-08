import { styled } from 'styled-components';
// import components
import GoBack from './GoBack';
import ThemeToggle from './ThemeToggle';

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid ${(props) => props.theme.accent_dark};
    padding-bottom: 1rem;
`;

const HeaderLogo = styled.div`
    font-size: 1.15rem;
    font-weight: 700;
    font-style: italic;
    color: ${(props) => props.theme.accent_dark};
`;

export default function Header({ currentTheme, setCurrentTheme }) {
    return (
        <HeaderWrapper>
            <GoBack />
            <HeaderLogo>Ryan Coins</HeaderLogo>
            <ThemeToggle
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
            />
        </HeaderWrapper>
    );
}
