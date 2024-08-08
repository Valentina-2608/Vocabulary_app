/* Registration page */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";;

  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
	
  import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

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

  let form_sign_up = document.getElementById('form_sign');
  form_sign_up.addEventListener('submit', registerUser);
  function registerUser(e){
    e.preventDefault();
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email = document.getElementById('user_email').value;
    var password =  document.getElementById('user_password').value;
    var first_name_error = document.getElementById('first_name_error');
    var last_name_error = document.getElementById('last_name_error');
    var email_error = document.getElementById('email_error');
    var password_error = document.getElementById('password_error');

  
    createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        // ...
        set(ref(db, 'users/' + user.uid), {
                first_name:first_name,
                last_name:last_name,
                email: email,
                password:password,
                
          })
          .then(() => {
          // Data saved successfully!
        alert('User was created successfully')
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
        // ..
     alert(errorMessage);
});

};
