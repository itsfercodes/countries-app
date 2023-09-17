import { useEffect, useState } from 'react';
import { Country } from '../interfaces/country';
import CountryCard from './CountryCard';

function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCountries() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/all`, {
          signal: controller.signal
        });

        if (!res.ok)
          throw new Error(
            'Something went wrong when fetching countries. Try again later'
          );

        const data = await res.json();

        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchCountries();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    // TODO: lazy load images
    <div className="country-list">
      {countries?.map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          capital={country.capital?.[0]}
          flag={country.flags.png}
          population={country.population}
          region={country.region}
        />
      ))}
    </div>
  );
}
export default CountryList;
