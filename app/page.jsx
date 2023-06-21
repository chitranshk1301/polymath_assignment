'use client'

import {auth} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Auth from "../components/Auth";
import List from '../components/List'
import Header from '../components/Header'

const Home = () => {
    // const db = firebase.firestore();
    const [user, loading, error] = useAuthState(auth);
    console.log("Loading:", loading, "|", "Current user:", user);

    return (
        <div>
            <Header />
            <List />
        </div>  
    )
  }
  
  export default Home