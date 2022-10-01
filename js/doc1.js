

var posts = [];
var pageNumber ;

var myRequest = new XMLHttpRequest();

myRequest.open("GET" , "https://api.themoviedb.org/3/person/popular?api_key=52bbcddeda849047525b51d6f8a12361");

myRequest.send();


myRequest.addEventListener("readystatechange" , function(){


  if(myRequest.readyState == 4 && myRequest.status == 200)
  {
    pageNumber =  JSON.parse(  myRequest.response).page;
    posts =  JSON.parse(  myRequest.response).results;
    console.log(posts);
    displayPosts()
  }
  
});


function displayPosts()
{
  var cartoona = ``;

  for(var i=0;i<posts.length;i++)
  {

    cartoona +=`
      
        <div class="col-md-3">

        <div class="post">
               <img class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].profile_path}">
                <h4>${posts[i].name}</h4>
                <p>${posts[i].popularity}</p>
        </div>
        </div>`

  }

  document.getElementById("myrow").innerHTML  = cartoona;
}



//movies




