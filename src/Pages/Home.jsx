import { useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
// import api data
import { getCoinData } from '../api';
// import components
import Coin from '../Components/Coin';
import Loader from '../Components/Loader';

export const PageWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    background-color: ${(props) => props.theme.bg_light};
    border-radius: 4px;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        padding: var(--padding-double-large);
        height: 180vh;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: var(--padding-double-medium);
        height: 180vh;
    }
`;

const Coins = styled.ul`
    width: 100%;
`;

export default function Home() {
    const { data, isLoading } = useQuery(['coins', 'coins-data'], getCoinData);
    return (
        <PageWrapper>
            {isLoading ? (
                <Loader />
            ) : (
                <Coins>
                    {data.slice(0, 50).map((coin) => {
                        return <Coin key={coin.id} coin={coin} />;
                    })}
                </Coins>
            )}
        </PageWrapper>
    );
}
