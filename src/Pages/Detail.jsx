import { useParams } from 'react-router-dom';
import { Loader, PageWrapper } from './Home';
import { useQuery } from '@tanstack/react-query';
import { getInfo, getPrice, getTickers } from '../api';
import { styled } from 'styled-components';
import DetailOverView from '../Components/Detail/DetailOverView';
import DetailPrice from '../Components/Detail/DetailPrice';
import DetailChart from '../Components/Detail/DetailChart';

const DetailGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 24px;
    color: ${(props) => props.theme.text_dark};
`;

export const DetailTitle = styled.h1`
    font-size: 36px;
    margin-bottom: 24px;
    text-align: center;
    color: ${(props) => props.theme.accent_light};
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
                <Loader>Loading...</Loader>
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
