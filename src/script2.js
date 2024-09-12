/* Log In page */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";;

  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
	
  import { getDatabase, ref, update} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

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
  const db = getDatabase();

  let form_log_in = document.getElementById('form_login');
  form_log_in.addEventListener('submit', (e) => {
    e.preventDefault();
    var email = document.getElementById('user_email').value;
    var password =  document.getElementById('user_password').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Log in 
      const user = userCredential.user;	
    // ...

    var loginData = new Date()
       update(ref(db, 'users/' + user.uid), {
      lastLogin: loginData
       })
      .then(() => {
      // Data saved successfully!
    alert('User logged successfully')
    window.location.replace("app.html");
     })
      .catch((error) => {
     // The write failed...
      alert('Error')
    });
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  alert(errorMessage);
});


});



