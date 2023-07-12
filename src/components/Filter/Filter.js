import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filter';
import css from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
  
  const handleFilterChange = (event) => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <label className={css.filterLabel} htmlFor="filterInput">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        id="filterInput"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
}

export default Filter;