import firebase from "./firebase.js";

const email = document.getElementById("userName");
const psw = document.getElementById("psw");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, psw.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
});
