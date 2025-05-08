import { useSelector } from 'react-redux';
import styles from './AppBar.module.css';
import { selecIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

const AppBar = () => {
  const isLoggedIn = useSelector(selecIsLoggedIn);

  return (
    <div className={styles.headerBg}>
      <Container>
        <header className={styles.header}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
      </Container>
    </div>
  );
};

export default AppBar;
