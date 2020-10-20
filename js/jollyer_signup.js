firebase.auth().onAuthStateChanged(function(user) {
  // if (user) {
  //   // User is signed in.



  //   var user = firebase.auth().currentUser;
  //   alert(user.email_x + '1st');
  //  // location.replace('index.html');

  //   if(user != null){

  //     alert(user.email_x + "2nd");
  //     //location.replace('index.html');
    
  //   }

  // } 
  // else if( user.email_x === 'undefined') {
  //   alert('Somethins wrong!');
  // }
  // else if( user == null) {
  //   alert('Somethins wrong!');
  // }

  // else {



  //   // No user is signed in.
  //   alert('No user signed in at the moment!');
    

  // }


});


function signUp() {

  var email_x = document.getElementById("inputEmail").value;
  var password_x = document.getElementById("inputPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email_x, password_x).then(function(){
    alert('hehehehe')
  })
  
  
  
  
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorCode + ': ' + errorMessage);


      // ...
    });

    
    alert('User created!' + email_x);
    var globalVariable={
      x: email_x
   };

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
    
    
    
        var user = firebase.auth().currentUser;
        var user_email = user.email_x;
        
        location.replace('index.html');
    
        if(user != null){
    
          alert(user.email_x + "2nd");
          //location.replace('index.html');
        
        }
    
      } 
      else if( user.email_x === 'undefined') {
        alert('Somethins wrong!');
      }
      else if( user == null) {
        alert('Somethins wrong!');
      }
    
      else {
    
    
    
        // No user is signed in.
        alert('No user signed in at the moment!');
        
    
      }
    
      
    });
    
    

}
