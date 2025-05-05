import s from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = () => {
  const filterInputID = useId();

  return (
    <section className={s.searchFormSection}>
      <label className={s.label} htmlFor={filterInputID}>
        Find contacts by name
      </label>
      <input className={s.input} placeholder='Mark' id={filterInputID}></input>
    </section>
  );
};

export default SearchBox;
