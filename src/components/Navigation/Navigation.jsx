import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import { selecIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(selecIsLoggedIn);
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      {isLoggedIn && <NavLink to='/contacts'>Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
