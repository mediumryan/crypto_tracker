import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';

const queryClient = new QueryClient();

const defaultTheme = lightTheme;

const toggleTheme = (currentTheme) => {
    return currentTheme === lightTheme ? darkTheme : lightTheme;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={defaultTheme}>
                    <App toggleTheme={toggleTheme} />
                </ThemeProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
