import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import LiveChat from '../components/LiveChat/LiveChat';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Login from '../components/LiveChat/Login';
import {auth, db} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import firebase from 'firebase';
import Chat1 from './chat/[id]';

const Home = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
  	if(user){
  		db.collection('users').doc(user.uid).set({
  			email:user.email,
  			lastSeen:firebase.firestore.FieldValue.serverTimestamp(),
  			photoURL:user.photoURL,
  		}  ,{merge:true}
  		);
  	}

  }  ,[user])

  return (
    <Layout>
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      {!user?<Login />:(<LiveChat />)}
    </Layout>
  );
};

export default Home;
