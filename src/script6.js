/* Show words from database */

/* Add words to FireStore DataBase */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";;
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

 // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDGm_R4NH_8DDq8cXKzU6gjYWpyvGTjzYU",
    authDomain: "vocabulary-app-1a547.firebaseapp.com",
    databaseURL: "https://vocabulary-app-1a547-default-rtdb.firebaseio.com",
    projectId: "vocabulary-app-1a547",
    storageBucket: "vocabulary-app-1a547.appspot.com",
    messagingSenderId: "1081771586654",
    appId: "1:1081771586654:web:d28436fa23ec0bcf54f0cf"
  };

  //Initialize Firebase
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore();
 const dbRef = collection(db, 'Words');

 let my_list_words = document.querySelector('.my_list_words');
 let show_words = document.getElementById('show_words');
 show_words.addEventListener('click', showMyWords);


 function showMyWords(){
    onSnapshot(dbRef, docsSnap => {
      docsSnap.forEach(doc => {
        console.log(doc.data().word);

        let new_word = document.createElement('div');
        new_word.classList.add('new_word')
  
        let new_word_caption = document.createElement('div');
        new_word_caption.classList.add('new_word_caption')
        new_word_caption.innerHTML = doc.data().word;

        new_word.appendChild(new_word_caption)
        my_list_words.appendChild(new_word);
  
        setTimeout(()=>{
          location.reload()
        },30000)
      })
  
    })
   
    }