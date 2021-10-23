/** 
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const listToken = () => {
    useEffect(() => {

      const obtenerDatos = async() => {

        const querySnapshot = await getDocs(collection(db, "listToken"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      }

      obtenerDatos();

    }, []);

}

export default listToken;
**/

