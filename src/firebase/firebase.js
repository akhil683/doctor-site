import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAlJ66T8sVZax31TdgCeo6BJph5nogsro",
  authDomain: "doctor-ff1d9.firebaseapp.com",
  projectId: "doctor-ff1d9",
  storageBucket: "doctor-ff1d9.appspot.com",
  messagingSenderId: "1052491511304",
  appId: "1:1052491511304:web:d05dfbc281ac35a95783bd"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const appointmentRef = collection(db, 'appointments')

export default app