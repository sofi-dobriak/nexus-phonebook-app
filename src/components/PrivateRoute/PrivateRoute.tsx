import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { ComponentType } from 'react';
import { useAppSelector } from '../../redux/hooks';

interface PrivateRouteProps {
  component: ComponentType;
  redirectTo?: string;
}

const PrivateRoute = ({ component: Component, redirectTo = '/' }: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
