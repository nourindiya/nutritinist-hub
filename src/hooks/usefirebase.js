import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();

    // const handleRegister = e => {
    //     e.preventDefault();
    // }

    // const handleEmailChange = e => {
    //     setEmail(e.target.value);
    // }


    // const handlePasswordChange = e => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             const user = result.user
    //             console.log(user);
    //         })
    //     setPassword(e.target.value);

    // }


    const signinUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })


    }



    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed
    }, [])

    return {
        user,
        isLoading,
        logOut,
        signinUsingGoogle,
        error

    }
}


export default useFirebase;