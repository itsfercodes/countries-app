interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string | undefined;
  flag: string;
}

function CountryCard({
  name,
  population,
  region,
  capital,
  flag
}: CountryCardProps) {
  return (
    <div className="card">
      <img src={flag} alt={`Flag of ${name}`} />
      <p>
        <strong>{name}</strong>
      </p>
      <p>Population: {population}</p>
      {capital ? (
        <p>Capital: {capital}</p>
      ) : (
        <p>Capital information not available :(</p>
      )}
      <p>Region: {region}</p>
    </div>
  );
}
export default CountryCard;
