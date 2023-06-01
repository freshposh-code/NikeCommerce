import { createContext, useState, useEffect, useContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password);

    setDoc(doc(db, "users", email), {
      savedCart: [],
    });
  }

  function signinUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function LogOut() {
    return signOut(auth);
  }

  const provider = () => {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ createUser, signinUser, user, LogOut, provider }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
