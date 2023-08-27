import { useParams } from 'react-router-dom';
import { Loader, PageWrapper } from './Home';
import { useQuery } from '@tanstack/react-query';
import { getInfo, getPrice, getTickers } from '../api';
import { styled } from 'styled-components';
import DetailOverView from '../Components/Detail/DetailOverView';
import DetailPrice from '../Components/Detail/DetailPrice';

const DetailGrid = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`;

export const DetailTitle = styled.h1`
    font-size: 36px;
    margin-bottom: 24px;
    text-align: center;
    color: ${(props) => props.theme.accent_light};
`;

const DetailGraph = styled.div``;

export default function Detail() {
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
                    <DetailGraph className="detail_item">
                        <DetailTitle>Graph</DetailTitle>
                        {coinId}
                    </DetailGraph>
                </DetailGrid>
            )}
        </PageWrapper>
    );
}
