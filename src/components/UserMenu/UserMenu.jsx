import { useDispatch, useSelector } from 'react-redux';
import styles from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { useMediaQuery } from 'react-responsive';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={styles.userMenuContainer}>
      {!isMobile && <p className={styles.name}>Welcome, {user.name}</p>}

      <button onClick={() => dispatch(logout())} type='button' className={styles.logOutButton}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
