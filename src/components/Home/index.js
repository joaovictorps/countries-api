import Header from '../Header';
import SearchInput from '../SearchInput';
import FilterRegion from '../FilterRegion';
import CardCountry from '../CardCountry';

import './style.css';

export default function Home() {
    return(
        <main id='main'>
            <Header />
            <section id='search-filter'>
                <SearchInput />
                <FilterRegion />
            </section>

            <section id='countries'>
                <CardCountry />
                <CardCountry />
                <CardCountry />
                <CardCountry />
            </section>
        </main>
    )
}