

var posts = [];
var pageNumber ;

var myRequest2 = new XMLHttpRequest();

myRequest2.open("GET" , "https://api.themoviedb.org/3/trending/movie/day?api_key=52bbcddeda849047525b51d6f8a12361");

myRequest2.send();


myRequest2.addEventListener("readystatechange" , function(){


  if(myRequest2.readyState == 4 && myRequest2.status == 200)
  {
    pageNumber =  JSON.parse(  myRequest2.response).page;
    posts =  JSON.parse(  myRequest2.response).results;
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
                <h4>${posts[i].title}</h4>
                <p>${posts[i].popularity}</p>
        </div>
        </div>`

  }

  document.getElementById("myrow2").innerHTML  = cartoona;
}


