import { useState, useEffect } from 'react';
import Countries from '../Countries';
import Pagination from '../Pagination';
import Header from '../Header';
import SearchInput from '../SearchInput';
import FilterRegion from '../FilterRegion';
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

function Home({ toggleTheme }) {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(36);

    useEffect(() => {
        api.get('https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag').then(res => {
            setCountries(res.data);
        });
    }, []);

    const searchCountry = () => {
        let inputValue = document.getElementById('search-input').value;

        if (inputValue.length >= 3) {
            api.get(`https://restcountries.eu/rest/v2/name/${inputValue}`).then(res => {
                setCountries(res.data);
                paginate(1);
            });
        }

        if (inputValue.length === 0) {
            api.get('https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag').then(res => {
                setCountries(res.data);
            });
        }
    }

    const handleRegions = () => {
        let regions = document.getElementById('regions-filter');

        if (regions.classList.contains('none')) {
            regions.classList.remove('none');
        } else {
            regions.classList.add('none');
        }
    }

    const filter = (event) => {
        const filterName = event.target.innerHTML;
        if (filterName === 'All') {
            api.get('https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag').then(res => {
                setCountries(res.data);
                handleRegions();
                paginate(1);
            });
        } else {
            api.get(`https://restcountries.eu/rest/v2/region/${filterName}?fields=name;capital;region;population;flag`).then(res => {
                setCountries(res.data);
                handleRegions();
                paginate(1);
            })
        }
    }

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (

        <Main id='main'>
            <Header toggleTheme={toggleTheme} />
            <section id='search-filter'>
                <SearchInput searchCountry={searchCountry} />
                <FilterRegion
                    handleRegions={handleRegions}
                    filter={filter}
                />
            </section>

            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={countries.length}
                paginate={paginate}
            />

            <Countries countries={currentCountries} />

            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={countries.length}
                paginate={paginate}
            />

        </Main>

    )
}

export default Home;