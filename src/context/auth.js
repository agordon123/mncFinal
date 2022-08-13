import { createContext,useState,useContext,useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged,signOut,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { app } from "./firebase";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  }
}
export const googleProvider = new GoogleAuthProvider();

export const useProvideAuth = () => {
  const [ user, setUser ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser)

      setLoading(false)
      setUser(user)
      return user
    } else {
      setLoading(false)
      setUser(false)
      return false
    }
  }
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(new GoogleAuthProvider())
      .then((response) => handleUser(response.user));
  };
  const signout = () => {
    return signOut().then(() => handleUser(false));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);
  return {
    user,
    loading,
    signinWithGoogle,
    signout,
  };
}
