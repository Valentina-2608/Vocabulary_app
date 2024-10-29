/* Sign Out*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  
let btn_log_out =  document.getElementById('btn_log_out');
btn_log_out.addEventListener('click', function(){
	signOut(auth).then(() => {
		// Sign-out successful.
		alert('Sign out success')
		window.location.replace("index.html");
	  }).catch((error) => {
		// An error happened.
	  });
})




