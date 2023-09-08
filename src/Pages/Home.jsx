import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCoinData } from '../api';
import { styled } from 'styled-components';
import Coin from '../Components/Coin';

export const PageWrapper = styled.div`
    background-color: ${(props) => props.theme.bg_light};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-double-page);
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        padding: var(--padding-double-large);
    }
`;

export const Loader = styled.div`
    font-size: var(--font-size-large);
    color: ${(props) => props.theme.text_dark};
`;

const HomeTitle = styled.h1`
    font-size: var(--font-size-large);
    font-weight: 700;
    font-style: italic;
    color: ${(props) => props.theme.accent_dark};
    margin-bottom: var(--margin-very-large);
    cursor: default;
`;

const CoinList = styled.ul`
    width: 100%;
`;

export default function Home() {
    const { data, isLoading } = useQuery(['coins', 'coins-data'], getCoinData);
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
