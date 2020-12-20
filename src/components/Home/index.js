import { useState, useEffect } from 'react';
import Header from '../Header';
import SearchInput from '../SearchInput';
import FilterRegion from '../FilterRegion';
import CardCountry from '../CardCountry';
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';

import * as themes from '../../styles/themes';
import ThemeContext from '../../styles/themes/context';

import api from '../../services/api';

const Main = styled.main`
    background-color: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    section {
        padding: 40px 15px;
    }

    #search-filter {
        width: 100%;
        max-width: 1400px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    #countries {
        width: 100%;
        max-width: 1400px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media (min-width: 660px) {
        #countries {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
        }
    }

    @media (min-width: 1000px) {
        #countries {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media (min-width: 1200px) {
        #countries {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
`

export default function Home() {
    const [countries, setCountries] = useState();
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    useEffect(() => {
        api.get('https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag').then(res => {
            setCountries(res.data);
        });
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeContext.Consumer>
                {theme => (
                    <ThemeProvider theme={theme}>
                        <Main id='main'>
                            <Header toggleTheme={toggleTheme} theme={theme} themes={themes} />
                            <section id='search-filter'>
                                <SearchInput />
                                <FilterRegion />
                            </section>

                            <section id='countries'>
                                {!countries ? 
                                <h1>Loading...</h1> 
                                : countries.map((country, index) => {
                                    
                                    return <CardCountry
                                                key={index} 
                                                name={country.name} 
                                                capital={country.capital} 
                                                region={country.region} 
                                                population={country.population} 
                                                flag={country.flag}
                                            />
                                })}
                            </section>
                        </Main>
                    </ThemeProvider>
                )}
            </ThemeContext.Consumer>
        </ThemeContext.Provider>
    )
}