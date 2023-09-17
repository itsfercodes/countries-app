import CountryList from './components/CountryList';
import FilterBy from './components/FilterBy';
import Header from './components/Header';
import SearchCountry from './components/SearchCountry';

// TODO: make filters work
// TODO: add style
// TODO: when country selected move
function CountriesApp() {
  return (
    <>
      <Header />
      <main>
        <SearchCountry />
        <FilterBy />
        <CountryList />
      </main>
    </>
  );
}

export default CountriesApp;
