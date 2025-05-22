import { selecIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { ComponentType } from 'react';
import { useAppSelector } from '../../redux/hooks';

interface RestrictedRouteProps {
  component: ComponentType;
  redirectTo?: string;
}

const RestrictedRoute = ({ component: Component, redirectTo = '/' }: RestrictedRouteProps) => {
  const isLoggedIn = useAppSelector(selecIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
