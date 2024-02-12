import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import icons
import { FaCaretRight } from 'react-icons/fa';

const CoinWrapper = styled.li`
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    border-bottom: 0.5px solid ${(props) => props.theme.text_dark};
    font-size: 0.85rem;
`;

const NameLogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        color: ${(props) => props.theme.text_dark};
    }
`;

export const Logo = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 1rem;
`;

const GoDetail = styled.button`
    font-size: 1.15rem;
    color: ${(props) => props.theme.text_dark};
    transition: 300ms all;
    &:hover {
        color: ${(props) => props.theme.accent};
    }
`;

export default function Coin({ coin }) {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/detail/${coin.id}`);
    };

    return (
        <CoinWrapper onClick={goDetail}>
            <NameLogo>
                <Logo
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />

                <span>{coin.name}</span>
            </NameLogo>
            <GoDetail onClick={goDetail}>
                <FaCaretRight />
            </GoDetail>
        </CoinWrapper>
    );
}
