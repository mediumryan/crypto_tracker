import Chart from 'react-apexcharts';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
// import components
import { DetailTitle, wrapperVariants } from './DetailOverView';
// import theme
import { darkTheme } from '../../themes';

const DetailChartWrapper = styled(motion.div)`
    flex-basis: 45%;
    border: 0.5px solid ${(props) => props.theme.text_dark};
    margin: 1.5rem 3rem;
    padding: 1.5rem 3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 20px;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 1rem 0;
        width: 90%;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 1rem 0;
        padding: 2rem;
    }
`;

const StyledChart = styled(Chart)`
    margin-top: 2rem;
`;

export default function DetailChart({ priceData, currentTheme }) {
    const editData =
        window.innerWidth > 768
            ? priceData.slice(6, 21)
            : priceData.slice(15, 21);

    const xCategories = editData.map((item) => {
        const timestamp = item.time_open * 1000;
        const date = new Date(timestamp);
        return `${date.getMonth() + 1}/${date.getDate()}`;
    });

    const chartOptions = {
        chart: {
            id: 'basic-bar',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: xCategories,
            labels: {
                style: {
                    fontSize: window.innerWidth > 768 ? '12px' : '8px',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: window.innerWidth > 768 ? '12px' : '8px',
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#FF5733', '#2196F3', '#FFC107', '#4CAF50'],
        fill: {
            colors: ['#FF5733', '#2196F3', '#FFC107', '#4CAF50'],
        },
        legend: {
            fontSize: window.innerWidth > 768 ? '12px' : '8px',
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
