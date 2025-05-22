import styles from './SearchBox.module.css';
import { useId } from 'react';
import { changeFilterName, changeFilterPhone } from '../../redux/filters/slice';
import { useAppDispatch } from '../../redux/hooks';

const SearchBox = () => {
  const dispatch = useAppDispatch();

  const nameInputID = useId();
  const phoneInputID = useId();

  const handleFilterContactByName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeFilterName(event.target.value));
  };

  const handleFilterContactByPhone = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeFilterPhone(event.target.value));
  };

  return (
    <section className={styles.searchFormSection}>
      <div className={styles.labelInputContainer}>
        <label className={styles.label} htmlFor={nameInputID}>
          Find contact <strong>by name</strong>
        </label>
        <input
          id={nameInputID}
          placeholder='Mark'
          className={styles.input}
          onChange={handleFilterContactByName}
        ></input>
      </div>

      <div className={styles.labelInputContainer}>
        <label className={styles.label} htmlFor={phoneInputID}>
          Find contact <strong>by phone</strong>
        </label>
        <input
          id={phoneInputID}
          placeholder='111-11-11'
          className={styles.input}
          onChange={handleFilterContactByPhone}
        ></input>
      </div>
    </section>
  );
};

export default SearchBox;
