import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  where,
  doc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import React from "react";
import { TextField } from "@mui/material";
//Contains all the firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgdbGeJukJQA2_cPzEmocY_HtefKb9ono",
  authDomain: "mnc-test-server.firebaseapp.com",
  projectId: "mnc-test-server",
  storageBucket: "mnc-test-server.appspot.com",
  messagingSenderId: "281255084650",
  appId: "1:281255084650:web:56da46543f11d31742c013",
  measurementId: "G-54G0KWXE65",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const storage = getStorage(app);

export const database = getDatabase(app);
export const setLocalPersistance = () => {
  setPersistence(auth, browserLocalPersistence);
};
export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        const email = userCredential.user.email;
        localStorage.setItem("authToken", JSON.stringify(user));
        localStorage.setItem("email", JSON.stringify(email));
        setLocalPersistance();
        createUserInFirestore(email, user);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    return { error: error.message };
  }
};
export const createUserInFirestore = async (email, uid) => {
  email = localStorage.getItem("email");
  uid = localStorage.getItem("authToken");
  const docRef = doc(db, "users");
  await addDoc(docRef, {
    uid: auth.currentUser.uid,
    role: "user",
    userName: email.split("@")[0],
    AccountType: "Regular",
    CreatedOn: serverTimestamp,
  });
};
export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setLocalPersistance();
        const user = userCredential.user.uid;
        const email = userCredential.user.email;
        localStorage.setItem("authToken", JSON.stringify(user));
        localStorage.setItem("email", JSON.stringify(email));
      }
    );
  } catch (error) {
    return { error: error.message };
  }
};
class User {
  constructor(email, userName, uid, role, created_at) {
    this.email = email;
    this.userName = userName;
    this.uid = uid;
    this.role = role;
    this.created_at = created_at;
  }
  toString() {
    return JSON.stringify(this);
  }
}
const userConverter = {
  toFirestore: (user) => {
    return {
      email: user.email,
      userName: user.userName,
      uid: user.uid,
      role: user.role,
      created_at: user.created_at,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User(
      data.email,
      data.userName,
      data.uid,
      data.role,
      data.created_at
    );
  },
};
export const userSignOut = async () => {
  try {
    await signOut(auth).then(() => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("email");
    });
    return true;
  } catch (error) {
    return false;
  }
};
export const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = signInWithPopup(auth, googleProvider).then((res) => {
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      getDocs(q).then((docs) => {
        if (docs.docs.length === 0) {
          addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
          });
        }
      });
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const getUserInfo = async () => {
  const user = localStorage.getItem("userToken");
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
      return (
        <div>
          <TextField value={profile.displayName} />
          <TextField value={profile.email} />
          <TextField value={profile.uid} />
        </div>
      );
    });
  }
};

export default app;
