
/* Game 1 */

/* Add words to FireStore DataBase */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";;
import { getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const dbRef = collection(db, 'Words');

let active_inputs=document.querySelectorAll('.active_input');
    for(let i=0; i < active_inputs.length; i++){
        active_inputs[i].addEventListener('input', addLetter);
    }
    function addLetter(event){
        let active_input = event.target;
        let active_input_parent=active_input.parentElement;
        let word_letter = active_input_parent.children[2].value;
        if (word_letter === active_input.placeholder){
            active_input.readOnly=true;
            active_input.style.color="black";
            setTimeout("alert('Correct')",100);
        }
         else {
            active_input.readOnly=false;
            active_input.style.color="red"; 
            setTimeout("alert('Wrong')",500);
            setTimeout(() => {
                active_input.value=active_input.placeholder;
                active_input.style.color="black"; 
                active_input.readOnly=true;

                // Create word from letters
                const collection =active_input_parent.children;
                let word = "";
                 for (let i = 0; i < collection.length; i++) {
                    word += collection[i].value;
                    }
            
                const data = {
                word:word
                };
                //Add word to database
                addDoc(dbRef, data)
                .then(()=>{
                     alert('This word was added to words you must know better')
                })
                .catch((error)=>{
                     alert('Error')
                });
              }, 1200);
        }
    }