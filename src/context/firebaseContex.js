import { createContext, useState } from "react"
import { useNavigate } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Import Firebase Config
import { firebaseConfig } from "../services/firebaseConfig";



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const FirebaseContext = createContext()

export const FirebaseProvider = ({ children }) => {

    let navigate = useNavigate()

    //Register a new user with email and password
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async (e) => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            return user
        } catch (error) {
            console.log(error.message);
        }
    };

    //Login with email and password
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const login = async (e) => {
        e.preventDefault()
        try {

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                    localStorage.setItem("user", JSON.stringify(user))
                    navigate("/")
                }
            })
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            return user

        } catch (error) {
            console.log(error.message);
        }
    }

    // Singout 
    const signout = async () => {
        try {
            onAuthStateChanged(auth, () => {
                signOut(auth)
                setUser(null)
                localStorage.removeItem("user")
                navigate("/")
            })


        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <FirebaseContext.Provider value={{ register, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword, login, loginEmail, setLoginEmail, loginPassword, setLoginPassword, user, signout }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseContext