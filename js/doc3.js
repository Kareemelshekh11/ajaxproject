

var posts = [];
var pageNumber ;

var myRequest3 = new XMLHttpRequest();

myRequest3.open("GET" , "https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361");

myRequest3.send();


myRequest3.addEventListener("readystatechange" , function(){


  if(myRequest3.readyState == 4 && myRequest3.status == 200)
  {
    pageNumber =  JSON.parse(  myRequest3.response).page;
    posts =  JSON.parse(  myRequest3.response).results;
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
               <img class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
                <h4>${posts[i].name}</h4>
                <p>${posts[i].popularity}</p>
        </div>
        </div>`

  }

  document.getElementById("myrow3").innerHTML  = cartoona;
}


