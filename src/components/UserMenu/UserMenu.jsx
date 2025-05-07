import { useDispatch, useSelector } from 'react-redux';
import styles from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { PiHandWaving } from 'react-icons/pi';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenuContainer}>
      <p className={styles.name}>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logout())} type='button' className={styles.logOutButton}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
