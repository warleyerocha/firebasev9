// Your web app's Firebase configuration
import {initializeApp} from 'firebase/app'
import {getFirestore, collection,addDoc,deleteDoc,doc,onSnapshot} from 'firebase/firestore'
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

  //real time get data col
    onSnapshot(colRef,(snapshot)=>{
        let tasks =[]
        snapshot.forEach((doc)=>{
            tasks.push({ ...doc.data(), id: doc.id})
        })
        console.log(tasks)

    })

    // add doc
    const addBookForm =  document.querySelector('.add')
    addBookForm.addEventListener('submit',(e) => {
        e.preventDefault()
        addDoc(colRef,{
            title: addBookForm.title.value,
            description: addBookForm.description.value
        }).then(()=>{
            addBookForm.reset()
        })
    })

    // delete doc
    const deleteBookForm =  document.querySelector('.delete')
    deleteBookForm.addEventListener('submit',(e) => {
        e.preventDefault()
        const docref = doc(db,'tasks',deleteBookForm.id.value)
        deleteDoc(docref).then(()=>{
            deleteBookForm.reset()
        })
    })