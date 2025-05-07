import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import RoutesList from './components/RoutesList/RoutesList';
import AddMessageModalOpen from './components/AddMessageModalOpen/AddMessageModalOpen';
import DeleteMessageModal from './components/DeleteMessageModal/DeleteMessageModal';
import UpdateMessageModal from './components/UpdateMessageModal/UpdateMessageModal';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import DeleteConfirmModal from './components/DeleteConfirmModal/DeleteConfirmModal';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Layout />
      <RoutesList />

      {isRefreshing && <Loader isRefreshing={isRefreshing} />}

      <AddMessageModalOpen />
      <DeleteMessageModal />
      <UpdateMessageModal />
      <BackToTopButton />

      <DeleteConfirmModal />
    </>
  );
}

export default App;
