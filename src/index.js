// Your web app's Firebase configuration
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAwfhkeRJPoo_tLgrixn7OcssMPUaaAcJk",
    authDomain: "testevanilla.firebaseapp.com",
    projectId: "testevanilla",
    storageBucket: "testevanilla.appspot.com",
    messagingSenderId: "586690827293",
    appId: "1:586690827293:web:934fb11a067f1a9422e2f4"
  };

  //init firebase app
  initializeApp(firebaseConfig)

  //init services
  const db = getFirestore()

  //collection ref
  const colRef = collection(db,'tasks')

  //get data col
  getDocs(colRef)
    .then((snapshot)=>{
        let tasks =[]
        snapshot.forEach((doc)=>{
            tasks.push({ ...doc.data(), id: doc.id})
        })
        console.log(tasks)
    .catch(err => {
        console.log(err.message)
    })
    })