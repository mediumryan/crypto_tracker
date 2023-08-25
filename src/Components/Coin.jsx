import React from 'react';
import { styled } from 'styled-components';
import { FaCaretRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CoinWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    margin-bottom: 12px;
    font-size: 24px;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const NameLogo = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 12px;
`;

const GoDetail = styled.button`
    font-size: 48px;
    color: ${(props) => props.theme.accent_light};
    transition: 300ms all;
    &:hover {
        opacity: 0.77;
        transform: scale(1.15);
    }
`;

export default function Coin({ item }) {
    const navigate = useNavigate();

    return (
        <CoinWrapper>
            <NameLogo>
                <Logo
                    src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`}
                />

                <span>{item.name}</span>
            </NameLogo>
            <GoDetail
                onClick={() => {
                    navigate(`/detail/${item.id}`);
                }}
            >
                <FaCaretRight />
            </GoDetail>
        </CoinWrapper>
    );
}
