import { db } from "./firebase";
import { getDocs, query, where, addDoc, collection,doc,deleteDoc,queryEqual, getDoc ,writeBatch, setDoc} from "firebase/firestore";
import { Alert } from "@mui/material";
//user CRUD Functions
export const createUser = async(uid, data)=> {
  return addDoc(doc(collection(db, "users"), { uid, ...data }, { merge: true }))
}
export const updateUser = async (uid, data) => {
    return setDoc(doc(collection(db, "users"), { uid, ...data }, { merge: true }))
}
export const getUser = async (uid) => {
    return getDoc(queryEqual(collection(db, "users"), "uid", uid));
}
export const deleteUser = async (uid) => { 
    return deleteDoc(doc(collection(db, "users"), { uid }));
}

//listing CRUD functions
export const createListing = async (type, data) => { 
    const docRef = doc(db, `listings/${type}/properties/`);
    await addDoc(docRef, { ...data }).then((doc) => {
        console.log("Doc Created",doc.id);
        return <Alert type="success">Doc Created Successfully !</Alert>
    })
}
export const updateListing = async (type, id, data) => { 
    const docRef = doc(db, `listings/${type}/properties/${id}`);
    await setDoc(docRef, { ...data }).then((doc) => {
        console.log("Doc Updated",doc.id);
        return <Alert type="success">Doc Updated Successfully !</Alert>
    })
}
export const getListing = async (type, id) => { 
    const docRef = doc(db, `listings/${type}/properties/${id}`);
    return getDoc(docRef);
}
export const getAllListings = async (type) => { 
    const docRef = collection(db, `listings/${type}/properties`);
    return getDocs(docRef);
}
export const deleteListing = async (type, id) => {
    const docRef = doc(db, `listings/${type}/properties/${id}`);
    deleteDoc(docRef);
    const snapshot = query(collection(db, `listings/${type}/properties`), where("id", "==", id));
    await getDoc(snapshot);

  const batch = writeBatch(db);

  snapshot.forEach((doc) => {
    batch.delete(doc.ref);
  });

  return batch.commit();
};