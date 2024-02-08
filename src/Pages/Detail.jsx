import { useParams } from 'react-router-dom';
import { PageWrapper } from './Home';
import { useQuery } from '@tanstack/react-query';
import { getInfo, getPrice, getTickers } from '../api';
import { styled } from 'styled-components';
import DetailOverView from '../Components/Detail/DetailOverView';
import DetailPrice from '../Components/Detail/DetailPrice';
import DetailChart from '../Components/Detail/DetailChart';
import Loader from '../Components/Loader';

const DetailGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: var(--margin-medium-large);
    color: ${(props) => props.theme.text_dark};
`;

export const DetailTitle = styled.h1`
    font-size: var(--font-size-medium-large);
    margin-bottom: var(--margin-medium-large);
    text-align: center;
    color: ${(props) => props.theme.accent_light};
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        border-bottom: 1px solid white;
        width: 100%;
        padding-bottom: 24px;
    }
`;

export default function Detail({ currentTheme }) {
    const { coinId } = useParams();
    const { data: priceData, isLoading: priceIsLoading } = useQuery(
        ['coins', 'coins-price'],
        () => {
            return getPrice(coinId);
        }
    );
    const { data: tickersData, isLoading: tickersIsLoading } = useQuery(
        ['coins', 'coins-tickers'],
        () => {
            return getTickers(coinId);
        }
    );
    const { data: infoData, isLoading: infoIsLoading } = useQuery(
        ['coins', 'coins-info'],
        () => {
            return getInfo(coinId);
        }
    );

    console.log(priceData && priceData);
    console.log(tickersData && tickersData);
    console.log(infoData && infoData);

    return (
        <PageWrapper>
            {priceIsLoading || tickersIsLoading || infoIsLoading ? (
                <Loader />
            ) : (
                <DetailGrid>
                    <DetailOverView infoData={infoData} />
                    <DetailPrice tickersData={tickersData} />
                    <DetailChart
                        priceData={priceData}
                        currentTheme={currentTheme}
                    />
                </DetailGrid>
            )}
        </PageWrapper>
    );
}
