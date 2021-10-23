import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const SaveProductName = (product) => {
    addDoc(collection(db, 'listToken'), { product });
}