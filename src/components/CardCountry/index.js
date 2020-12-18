import styled from 'styled-components';

const Card = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    max-width: 290px;
    border-radius: 8px;
    margin-bottom: 40px;
    -webkit-box-shadow: var(--webkit-box-shadow);
    -moz-box-shadow: var(--moz-box-shadow);
    box-shadow: var(--box-shadow);

    img {
        width: 100%;
        border-radius: 8px 8px 0 0;
    }

    .cardDescription {
        color: ${props => props.theme.color};
        padding: 20px;
    }

    .cardDescription > h2 {
        font-size: 22px;
        margin: 10px 0;
    }

    .cardDescription > section > p {
        margin-bottom: 7px;
    }

    .cardDescription > section > p > span{
        font-weight: 600;
    }
`

export default function CardCountry() {
    return (
        <Card className='cardCountry'>
            <img src='https://restcountries.eu/data/deu.svg' alt='Germany'/>
            <div className='cardDescription'>
                <h2>Germany</h2>
                <section >
                    <p><span>Population: </span>81,770.900</p>
                    <p><span>Region: </span>Europe</p>
                    <p><span>Capital: </span>Berlin</p>
                </section>
            </div>
        </Card>
    )
}