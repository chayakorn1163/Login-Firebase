
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  

  const firebaseConfig = {
    apiKey: "AIzaSyAOGhcgWUGeQvVWAIrOmd0v1Y6FZbr67VQ",
    authDomain: "login-database-f04cb.firebaseapp.com",
    projectId: "login-database-f04cb",
    storageBucket: "login-database-f04cb.appspot.com",
    messagingSenderId: "852177831057",
    appId: "1:852177831057:web:4a7676719f57caafe9ab30",
    measurementId: "G-HPX12GZGZ7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


// Correct form variable
const form = document.getElementById("registerForm");

// Add event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the values of the email and password fields
  const username = from.elements["username"].value;
  const email = form.elements["email"].value;
  const password = form.elements["password"].value;


  // Console log the values
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("username:", username);
  createUserWithEmailAndPassword(auth, username, email, password).then((result) =>{
    alert("สร้างบัญชีเรียบร้อย")

  }).catch((error) =>{
    alert("error.message");
  })
});
