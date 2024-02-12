import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import styles
import './CSS/index.css';
// import components
import App from './App';
import ScrollToTop from './Components/helper/ScrollToTop';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <QueryClientProvider client={queryClient}>
                <ScrollToTop />
                <App />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
