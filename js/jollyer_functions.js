
function submitPost(){

    var created_at = Date().toLocaleString();
    var post_desc = document.getElementById('jollyer_post').value;
    //alert('post_desc:' + post_desc);

    
        firebase.database().ref('POSTS_db/').push({
          POST_desc : post_desc,
          TIMESTAMP_created : created_at
        });

        loadPosts();
      

}

function loadPosts(){

  var starCountRef = firebase.database().ref('POSTS_db/');
  starCountRef.on('value', function(snapshot) 
  {
    var posts = [];
    var container_div = document.getElementById('container_ht');

    
    


    snapshot.forEach((element, i)=>{
      var row_div = document.createElement('div');
      row_div.classList.add('row');

      var img_div = document.createElement('div');
      var img_= document.createElement('img');
      img_.src = 'img/iconfinder_user.png';
      img_.className = 'img-fluid img_dp'
      img_div.className = 'col-md-4 col-sm-6 col-xs-4 col d-flex align-items-center justify-content-center dp-div' ;
      img_div.appendChild(img_);


      var desc_div = document.createElement('div');
      desc_div.className = 'col-md-6 col-sm-6 col-xs-4 desc-div';

      var desc_div_P = document.createElement('P');
      desc_div_P.className = 'desc-div p';
      desc_div_P.innerHTML = element.val().POST_desc;


      var desc_div_P2 = document.createElement('div');
      desc_div_P2.innerHTML = element.val().TIMESTAMP_created;

      desc_div.appendChild(desc_div_P);
      desc_div.appendChild(desc_div_P2);
      


      var reaction_div = document.createElement('div');
      var liked_div = document.createElement('div');
      liked_div.className = 'col-md-1 col-sm-6 col-xs-4 col d-flex align-items-center justify-content-center liked_div';
      liked_div.innerHTML = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
      var dislike_div = document.createElement('div');
      dislike_div.className = 'col-md-1 col-sm-6 col-xs-4 col d-flex align-items-center justify-content-center disliked_div';
      dislike_div.innerHTML = '<i class="fa fa-frown-o" aria-hidden="true"></i>';


      container_div.appendChild(row_div);
      row_div.appendChild(img_div);
      row_div.appendChild(desc_div);
      row_div.appendChild(liked_div);
      row_div.appendChild(dislike_div);
      
      


      posts.push(element.val().POST_desc);
    });

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
      
    
  var div_post = document.getElementById('posts_kkk');
  //div_post.innerHTML ="" + posts;

  alert('insside load');
});

}