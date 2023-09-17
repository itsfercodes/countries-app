import { useState } from 'react';

function SearchCountry() {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      placeholder="Search for a country..."
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
export default SearchCountry;
