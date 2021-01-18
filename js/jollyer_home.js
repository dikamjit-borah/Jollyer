

var is_liked = false;
var is_disliked = false;
document.querySelectorAll('.liked_div').forEach(item => {
    item.addEventListener('click', event => {

        
       
      //handle click

     

        if(is_liked==false)
        {
            item.classList.add('liked');
            is_liked = true
        }
        else{
           item.classList.remove('liked');
            is_liked = false
        }
      
    });
  });

 document.querySelectorAll('.disliked_div').forEach(item => {
    item.addEventListener('click', event => {
      //handle click

     
     
        if(is_disliked==false)
        {
            item.classList.add('disliked');
            is_disliked = true
        }
        else{
           item.classList.remove('disliked');
            is_disliked = false
        }
      
    });
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
  
  
      var user = firebase.auth().currentUser;
     // var user_email = user.email_x;
    }});


  document.getElementById('user_name_ht').addEventListener('load', user_get());
function user_get(){
  var vOneLS = localStorage.getItem("ex");  
    var user = firebase.auth().currentUser;
    var span_user = document.getElementById('user_name_ht');
    span_user.innerHTML = "Hello" + vOneLS;
    alert('sdkjbfskbfla');
  
  }
  


