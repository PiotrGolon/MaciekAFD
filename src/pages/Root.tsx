import { Outlet } from 'react-router-dom';
import SessionContextProvider from '../store/session-context';
import MainHeader from '../components/Navigation/MainHeader';

export default function Root() {
  return (
      <SessionContextProvider>
          <MainHeader />
          <Outlet />
      </SessionContextProvider>
  );
}
