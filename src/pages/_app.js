import Theme from '../styles/theme';
import { StateContext } from '../../context/StateContext';
import reducer, { initialState } from './api/reducer';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  const [user] = useAuthState(auth);

  return (
    <>
    <StateContext initialState={initialState}  reducer = {reducer}>
      <Theme>
        <Component user = {user} key={router.asPath} {...pageProps} />
      </Theme>
    </StateContext>
    
    </>
  );
}
