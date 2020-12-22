import { useState, useEffect } from 'react';
import Header from '../Header';
import SearchInput from '../SearchInput';
import FilterRegion from '../FilterRegion';
import CardCountry from '../CardCountry';
import styled from 'styled-components';

import api from '../../services/api';

const Main = styled.main`
    background-color: ${props => props.theme.colors.background};
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

function Home({toggleTheme}) {
    const [countries, setCountries] = useState();

    useEffect(() => {
        api.get('https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag').then(res => {
            setCountries(res.data);
        });
    }, []);

    return (

        <Main id='main'>
            <Header toggleTheme={toggleTheme}/>
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

    )
}

export default Home;