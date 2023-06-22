'use client'

// import { useCollection } from "react-firebase-hooks/firestore";
import List from '../components/List'
import Header from '../components/Header'
import Login from '../components/Login'
import { AuthProvider, useAuth } from "../context/authContext";

const Home = () => {
    // const db = firebase.firestore();
    return (
        <AuthProvider>
            <div>
            
                <Header />
                <List />
            </div>
        </AuthProvider>
    )
}

export default Home