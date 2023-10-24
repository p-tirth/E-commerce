import { collection, doc, setDoc ,getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const updateCart = async (docId, data) => {
  try {
    const collectionRef = collection(db, "users");
    const customIdDocRef = doc(collectionRef, docId);

    await setDoc(customIdDocRef, data).then(() => {
      console.log("Document successfully written with custom ID: ", docId);
      console.log("data : ",data)
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const readCart = async (docId) => {
  let data = {}
  try {
    const collectionRef = collection(db, "users");
    const documentRef = doc(collectionRef, docId);

    await getDoc(documentRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        // Data exists in the document
        data = docSnapshot.data();
        console.log(data.id);
        return data.id
      } else {
        console.log("Document does not exist");
        return 0
      }
    });
    return data
  } catch (error) {
    console.error("Error adding document: ", e);
  }
};
