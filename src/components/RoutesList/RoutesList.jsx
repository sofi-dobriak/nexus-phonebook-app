import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import NotFound from '../NotFound/NotFound';
import Container from '../Container/Container';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

const RoutesList = () => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/register'
            element={<RestrictedRoute redirectTo='/contacts' component={<RegistrationPage />} />}
          />
          <Route
            path='login'
            element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />}
          />
          <Route
            path='contacts'
            element={<PrivateRoute redirectTo='/login' component={<ContactsPage />} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default RoutesList;
