import { Link } from "react-router-dom";
import styled from 'styled-components';

const Card = styled.div`
    cursor: pointer;
    background-color: ${props => props.theme.colors.backgroundColor};
    height: 380px;
    max-width: 290px;
    border-radius: 8px;
    margin-bottom: 40px;
    -webkit-box-shadow: var(--webkit-box-shadow);
    -moz-box-shadow: var(--moz-box-shadow);
    box-shadow: var(--box-shadow);

    img {
        width: 100%;
        height: 180px;
        border-radius: 8px 8px 0 0;
    }

    .cardDescription > section {
        padding: 0;
    }

    .cardDescription {
        color: ${props => props.theme.colors.color};
        padding: 0 15px;
    }

    .cardDescription > h2 {
        font-size: 22px;
        margin: 10px 0;
    }

    .cardDescription > section > div {
        margin-bottom: 5px;
    }

    .cardDescription > section > div {
        padding: 0;
    }

    .cardDescription > section > div > label {
        font-weight: 800;
    }

    .cardDescription > section > div > label > span {
        font-weight: 400;
    }
`

export default function CardCountry({name, capital, flag, population, region}) {

    return (
        <Card className='cardCountry'>

            <Link to={`/detail/${name}`}>
            <img src={flag} alt={`${name} Flag`}/>
            <div className='cardDescription'>
                <h2>{name}</h2>
                <section>
                    <div>

                    <label>Population: <span>{population}</span></label>
                    </div>
                
                    <div>

                    <label>Region: <span>{region}</span></label>
                    </div>
                    
                    <div>
                    <label>Capital: <span>{capital}</span></label>
                    </div>
                    

                </section>
            </div>
            </Link>
        </Card>
    )
}