import './style.css';

export default function CardCountry() {
    return (
        <div className='cardCountry'>
            <img src='https://restcountries.eu/data/deu.svg' alt='Germany'/>
            <div className='cardDescription'>
                <h2>Germany</h2>
                <section >
                    <p><span>Population: </span>81,770.900</p>
                    <p><span>Region: </span>Europe</p>
                    <p><span>Capital: </span>Berlin</p>
                </section>
            </div>
        </div>
    )
}