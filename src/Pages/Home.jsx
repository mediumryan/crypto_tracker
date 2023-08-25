import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCoinData } from '../api';
import { styled } from 'styled-components';
import Coin from '../Components/Coin';

export const PageWrapper = styled.div`
    background-color: ${(props) => props.theme.bg_light};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 128px;
`;

export const Loader = styled.div`
    font-size: 48px;
`;

const HomeTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    color: ${(props) => props.theme.accent_dark};
    margin-bottom: 48px;
    cursor: default;
`;

const CoinList = styled.ul`
    width: 100%;
`;

export default function Home() {
    const { data, isLoading } = useQuery(['coins', 'coins-data'], getCoinData);

    console.log(data && data[0]);
    return (
        <PageWrapper>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <HomeTitle>Ryan Coins</HomeTitle>
                    <CoinList>
                        {data.slice(0, 100).map((coin) => {
                            return <Coin key={coin.id} coin={coin} />;
                        })}
                    </CoinList>
                </>
            )}
        </PageWrapper>
    );
}
