import { useSelector } from 'react-redux';
import { selecIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selecIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
