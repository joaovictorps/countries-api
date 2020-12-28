import CardCountry from '../CardCountry';

const Countries = ({countries}) => {
    return(
        <section id='countries'>
                {!countries ?
                    <h1>Loading...</h1>
                    : countries.map((country, index) => (
                         <CardCountry
                            key={index}
                            name={country.name}
                            capital={country.capital}
                            region={country.region}
                            population={country.population}
                            flag={country.flag}
                        />
                    ))}
            </section>
    )
}

export default Countries;