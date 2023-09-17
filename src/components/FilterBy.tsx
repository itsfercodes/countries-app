import { useState } from 'react';

function FilterBy() {
  const [regionFilter, setRegionFilter] = useState('none');

  const filters = [
    { id: 0, name: 'Africa' },
    { id: 1, name: 'America' },
    { id: 2, name: 'Asia' },
    { id: 3, name: 'Europe' },
    { id: 4, name: 'Oceania' }
  ];

  return (
    <select
      name="region"
      id="region"
      value={regionFilter}
      onChange={(e) => setRegionFilter(e.target.value)}
    >
      <option value="none" disabled hidden>
        Filter by Region
      </option>
      {filters.map((filter) => (
        <option key={filter.id} value={filter.name}>
          {filter.name}
        </option>
      ))}
    </select>
  );
}
export default FilterBy;
