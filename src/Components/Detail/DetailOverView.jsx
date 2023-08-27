import React from 'react';
import { styled } from 'styled-components';
import { Logo } from '../Coin';
import { DetailTitle } from '../../Pages/Detail';

const DetailOverviewWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const RankType = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 24px;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        span:first-child {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 12px;
        }
        span:last-child {
            font-size: 18px;
        }
    }
`;

const OverView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        margin: 24px 12px;
        font-size: 24px;
        font-weight: 700;
    }
    p {
        padding-left: 48px;
    }
`;

export default function DetailOverView({ infoData }) {
    return (
        <DetailOverviewWrapper className="detail_item">
            <DetailTitle
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Logo
                    src={`https://coinicons-api.vercel.app/api/icon/${infoData.symbol.toLowerCase()}`}
                />
                <span>{infoData.name}</span>
                <span>({infoData.symbol})</span>
            </DetailTitle>
            <RankType>
                <div>
                    <span>Rank</span>
                    <span>{infoData.rank}</span>
                </div>
                <div>
                    <span>Type</span>
                    <span>{infoData.type}</span>
                </div>
            </RankType>
            <OverView>
                <h3>OverView</h3>
                <p>{infoData.description}</p>
            </OverView>
        </DetailOverviewWrapper>
    );
}
