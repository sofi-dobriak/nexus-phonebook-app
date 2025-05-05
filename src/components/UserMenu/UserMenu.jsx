import { useDispatch, useSelector } from 'react-redux';
import styles from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logout())} type='button'>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
