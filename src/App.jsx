import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import Layout from './components/Layout/Layout.tsx';
import RoutesList from './components/RoutesList/RoutesList';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 250,
    });
  }, []);

  return isRefreshing ? null : (
    <>
      <Layout />
      <RoutesList />
    </>
  );
}

export default App;
