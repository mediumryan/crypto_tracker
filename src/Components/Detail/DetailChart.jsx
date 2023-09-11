import React from 'react';
import Chart from 'react-apexcharts';
import { DetailTitle } from '../../Pages/Detail';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { wrapperVariants } from './DetailOverView';
import { darkTheme } from '../../themes';

const DetailChartWrapper = styled(motion.div)`
    align-self: center;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        min-height: 30vh;
        margin: var(--margin-medium-large) var(--margin-very-large);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: var(--margin-very-large) auto;
        padding: var(--padding-large) 0;
        width: 100%;
    }
`;

const StyledChart = styled(Chart)`
    margin-top: var(--margin-medium-large);
`;

export default function DetailChart({ priceData, currentTheme }) {
    const editData = priceData.slice(6, 21);

    const xCategories = editData.map((item) => {
        const timestamp = item.time_open * 1000;
        const date = new Date(timestamp);
        return `${date.getMonth() + 1}/${date.getDate()}`;
    });

    const chartOptions = {
        chart: {
            id: 'basic-bar',
        },
        xaxis: {
            categories: xCategories,
            labels: {
                style: {
                    fontSize: window.innerWidth > 768 ? '12px' : '6px',
                    marginBottom: 64,
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: window.innerWidth > 768 ? '12px' : '6px',
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#FF5733', '#2196F3', '#FFC107', '#4CAF50'], // Added colors for open, close, low, high
        fill: {
            colors: ['#FF5733', '#2196F3', '#FFC107', '#4CAF50'], // Added colors for open, close, low, high
        },
        legend: {
            fontSize: window.innerWidth > 768 ? '12px' : '6px',
            markers: {
                width: 12,
                height: 12,
            },
        },
        theme: {
            mode: currentTheme === darkTheme ? 'dark' : 'light',
        },
    };

    const chartSeries = [
        {
            name: 'Open',
            data: editData.map((data) => parseFloat(data.open)),
        },
        {
            name: 'Close',
            data: editData.map((data) => parseFloat(data.close)),
        },
        {
            name: 'Low',
            data: editData.map((data) => parseFloat(data.low)),
        },
        {
            name: 'High',
            data: editData.map((data) => parseFloat(data.high)),
        },
    ];

    return (
        <DetailChartWrapper
            className="detail_item"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
        >
            <DetailTitle>Price Graph</DetailTitle>
            <StyledChart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={350}
            />
        </DetailChartWrapper>
    );
}
