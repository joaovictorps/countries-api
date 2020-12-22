import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global.js';
import Home from './components/Home';
import Detail from './components/Detail';

export default function App() {
    const [theme, setTheme] = usePersistedState('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle />
                <Switch>
                    <Route exact path='/' render={() => (<Home toggleTheme={toggleTheme} />)} />
                    <Route path='/detail/:name' render={(props) => (<Detail toggleTheme={toggleTheme} {...props} />)} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}