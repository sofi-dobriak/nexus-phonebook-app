import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { useId } from 'react';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const filterInputID = useId();

  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <section className={s.searchFormSection}>
      <label className={s.label} htmlFor={filterInputID}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        placeholder='Mark'
        id={filterInputID}
        onChange={handleFilterChange}
      ></input>
    </section>
  );
};

export default SearchBox;
