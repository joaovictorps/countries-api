import { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Back from '../Back';
import Label from '../Label';

import { ThemeProvider } from 'styled-components';

import * as themes from '../../styles/themes';
import ThemeContext from '../../styles/themes/context';

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

export default function Detail() {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

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

                            <section className='content'>
                                <img src='https://restcountries.eu/data/deu.svg' alt='Flag' />

                                <div className='description'>
                                    <h2>Belgium</h2>

                                    <div className='sections'>
                                        <section className='section-label'>
                                            <Label title='Native Name' values='Belgie' />

                                            <Label title='Population' values='11,319,511' />

                                            <Label title='Region' values='Europe' />

                                            <Label title='Sub Region' values='Western Europe' />

                                            <Label title='Capital' values='Brussels' />
                                        </section>

                                        <section className='section-label'>
                                            <Label title='Top Level Domain' values='.be' />

                                            <Label title='Currencies' values='Euro' />

                                            <Label title='Languages' values={['Dutch', 'French', 'Germany']} />
                                        </section>
                                    </div>
                                    <div className='border-countries'>
                                        <label>Border Countries:</label>
                                        <ul>
                                            <li>France</li>
                                            <li>Germany</li>
                                            <li>Netherlands</li>
                                            <li>Netherlands</li>
                                            <li>Netherlands</li>
                                        </ul>
                                    </div>

                                </div>

                            </section>
                        </Main>
                    </ThemeProvider>
                )}
            </ThemeContext.Consumer>
        </ThemeContext.Provider>
    )
}