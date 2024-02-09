import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
// import components
import { PageWrapper } from './Home';
import DetailOverView from '../Components/Detail/DetailOverView';
import DetailPrice from '../Components/Detail/DetailPrice';
import DetailChart from '../Components/Detail/DetailChart';
import Loader from '../Components/Loader';
// import api data
import { getInfo, getPrice, getTickers } from '../api';

const DetailGrid = styled.div`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.text_dark};
`;

export default function Detail({ currentTheme }) {
    const { coinId } = useParams();
    // get coin data
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
