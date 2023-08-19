
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  import { firestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAnseVTQyE4xJ8QBs92wYUigWQFabfnCbk",
    authDomain: "registerationform-bb5c9.firebaseapp.com",
    projectId: "registerationform-bb5c9",
    storageBucket: "registerationform-bb5c9.appspot.com",
    messagingSenderId: "714847437762",
    appId: "1:714847437762:web:d0715445ffea90dcb40c5b",
    measurementId: "G-6MTB0BY2NJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);







function registered(event){
    event.preventDefault()
    var name =document.getElementById('name').value
    console.log('name',name);
    var fname =document.getElementById('fathers_name').value
    console.log('fathers_name',fname);
      var mname =document.getElementById('fathers_name').value
    console.log('mothers_name',mname);
       var eid =document.getElementById('email_id').value
    console.log('email_id',eid);
     var pno =document.getElementById('phone_no').value
    console.log('phone_no',pno);
      var idproof =document.getElementById('id_proof').value
    console.log('id_proof',idproof);
     var city =document.getElementById('city').value
    console.log('city',city);
       var state =document.getElementById('country-state').value
    console.log('country-state',state);
       var idno =document.getElementById('id_no').value
    console.log('id_no',idno);
    var dtbirth =document.getElementById('time').value
    console.log('time',dtbirth);
   //  var male =document.getElementById('male').value
   //  console.log('male',male);
   //  var female =document.getElementById('female').value
   //  console.log('female',female);
    var hno =document.getElementById('h_no').value
    console.log('h_no',hno);
    var pin =document.getElementById('pin').value
    console.log('pin',pin);
    var loc =document.getElementById('locality').value
    console.log('locality',loc);
    var gender = document.getElementsByName('gender');
var gender_value;
for(var i = 0; i < gender.length; i++){
    if(gender[i].checked){
        gender_value = gender[i].value;
    }

}
//  var gender_value=document.querySelector('input[name="rate"]:checked').value;
console.log('gender',gender_value);
}
