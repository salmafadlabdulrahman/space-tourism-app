import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCX512Ik-B2BmVHKz25JYURAZJVQbnjB6o",
  authDomain: "space-tourism-3fae1.firebaseapp.com",
  projectId: "space-tourism-3fae1",
  storageBucket: "space-tourism-3fae1.appspot.com",
  messagingSenderId: "692430515101",
  appId: "1:692430515101:web:b12f70cd4aea8e2d885d74",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//the planets collection
const planetsCollectionRef = collection(db, "planets")

//the planets collection
const crewCollectionRef = collection(db, "crew")

//the planets collection
const techCollectionRef = collection(db, "technology")


export async function getPlanetsData() {
  const querySnapshot = await getDocs(planetsCollectionRef)

  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data()
  }))
  return dataArr
}

export async function getCrewData() {
  const querySnapshot = await getDocs(crewCollectionRef)

  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data()
  }))

  
  return dataArr
}

export async function getTechData() {
  const querySnapshot = await getDocs(techCollectionRef);

  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data()
  }))

  return dataArr
}
