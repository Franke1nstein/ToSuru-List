import React from 'react';
import './Style.css';

const FilterTasks = ({ setFilter, filter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filter-tasks">
      <label>Filtrer par : </label>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">Toutes</option>
        <option value="completed">Terminées</option>
        <option value="pending">En cours</option>
      </select>
    </div>
  );
};

export default FilterTasks;
