import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Back from '../Back';

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

     > section {
        padding: 25px 14px; 
    }

    .back {
        width: 100%;
        max-width: 1400px;
    }

    section > img {
        width: 100%;
    }

    section > div {
        margin: 10px 0;
    }

    .description {
        margin-bottom: 30px;
    }

    .description > h2{
        color: ${props => props.theme.color};
        margin: 30px 0;
    }

    .section-label {
        margin-bottom: 35px;
    }

    .section-label > div > label {
        color: ${props => props.theme.color};
        font-weight: 800;
    }

    .section-label > div > label > span {
        font-weight: 400;
    }

    .border-countries > label {
        color: ${props => props.theme.color};
        font-weight: 800;
    }

    .border-countries > ul {
        margin-top: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }

    .border-countries > ul > li {
        border-radius: 5px;
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-box-shadow: var(--webkit-box-shadow);
        -moz-box-shadow: var(--moz-box-shadow);
        box-shadow: var(--box-shadow);
    }

    @media (max-width: 330px) {
        .border-countries > ul {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 990px) {
        > section {
            padding: 25px 40px; 
        }

        .content {
            max-width: 1400px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 80px;
        }

        .content > img {
            height: 100%;
        }

        .sections {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .description {
            padding: 25px 0;
            margin: 0;
        }

        .description > h2 {
            margin: 0;
        }
    }
`

export default function Detail(props) {
    const [details, setDetails] = useState({});
    const [theme, setTheme] = useState(themes.light);

    function transformArrayToString(values) {
        console.log(values);

        if(values.length === 1) return values[0].name;
        
        let string;

        values.forEach(value =>{
            if(string === undefined) {
                string = value.name;

            } else if(!value.name) {
                return 
            } else {
                string= string + `, ${value.name}`;
            } 
        });
        return string;
    }

    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    useEffect(() => {
        console.log();
        api.get(`https://restcountries.eu/rest/v2/name/${props.match.params.name}`).then(res => {
            setDetails(res.data[0]);

        })
    }, [props.match.params.name]);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeContext.Consumer>
                {theme => (
                    <ThemeProvider theme={theme}>
                        <Main id='main'>
                            <Header toggleTheme={toggleTheme} theme={theme} themes={themes} />

                            <section className='back'>
                                <Back />
                            </section>

                            {!details? <h1>Loading...</h1>:
                                <section className='content'>
                                <img src={details.flag} alt='Flag' />

                                <div className='description'>
                                    <h2>{details.name}</h2>

                                    <div className='sections'>
                                        <section className='section-label'>
                                            <div>
                                                <label>Native Name: <span>{details.nativeName}</span></label>
                                            </div>

                                            <div>
                                                <label>Population: <span>{details.population}</span></label>
                                            </div>

                                            <div>
                                                <label>Region: <span>{details.region}</span></label>
                                            </div>

                                            <div>
                                                <label>Sub Region: <span>{details.subregion}</span></label>
                                            </div>

                                            <div>
                                                <label>Capital: <span>{details.capital}</span></label>
                                            </div>

                                        </section>

                                        <section className='section-label'>

                                            <div>
                                                <label>Top Level Domain: <span>{details.topLevelDomain}</span></label>
                                            </div>

                                            <div>
                                                <label>Currencies: <span>{!details.currencies ? null : transformArrayToString(details.currencies)}</span></label>
                                            </div>

                                            <div>
                                                <label>Languages: <span>{!details.languages ? null : transformArrayToString(details.languages)}</span></label>
                                            </div> 
                                        </section>
                                    </div>
                                    <div className='border-countries'>
                                        <label>Border Countries:</label>
                                        <ul>
                                           {!details.borders ? null : details.borders.map((border, index) => {
                                               return <li key={index}>{border}</li>
                                           })}
                                        </ul>
                                    </div>

                                </div>

                            </section>
                            }
                            
                        </Main>
                    </ThemeProvider>
                )}
            </ThemeContext.Consumer>
        </ThemeContext.Provider>
    )
}