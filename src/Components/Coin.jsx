import React from 'react';
import { styled } from 'styled-components';
import { FaCaretRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CoinWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-double-medium);
    margin-bottom: var(--margin-medium);
    font-size: var(--font-size-medium);
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.bg_dark} 0px 8px 8px -8px,
        ${(props) => props.theme.bg_dark} 0px 30px 60px -30px,
        ${(props) => props.theme.bg_dark} 0px 30px 60px -30px inset;
`;

const NameLogo = styled.div`
    display: flex;
    align-items: center;
    span {
        color: ${(props) => props.theme.text_dark};
    }
`;

export const Logo = styled.img`
    width: 36px;
    height: 36px;
    margin-right: var(--margin-medium);
`;

const GoDetail = styled.button`
    font-size: var(--font-size-large);
    color: ${(props) => props.theme.accent_light};
    transition: 300ms all;
    &:hover {
        opacity: 0.77;
        transform: scale(1.15);
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
