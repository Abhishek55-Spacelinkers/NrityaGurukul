"use client";

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Database variables
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  const refreshAuth = useCallback(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        
        const updatedUser = auth.currentUser;
        setUser({
          ...updatedUser,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = refreshAuth();
    return () => unsubscribe();
  }, [refreshAuth]);

  // sign up method with email passowrd
  const signupWithEmail = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in method with email passowrd
  const signinWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in method with email passowrd
  const EmailVerify = (user) => {
    return sendEmailVerification(user);
  };

  // forget password
  const forgetwithEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // logout function
  const logoutUser = () => {
    return signOut(auth);
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        setUser,
        Loading,
        setLoading,
        signupWithEmail,
        EmailVerify,
        signinWithEmail,
        forgetwithEmail,
        logoutUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
export { auth };
