var data=[
    [
        "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX0PtSPw59nh_ScwhDYvqvx5jvaFOqQnBJrttZyGo1Cg6SXcsu1fLgPRTZ6LysCXGN2SE0rlowH4NBMWNE5OPmb9DMEiau5BFXsQjfAw39CYVjbGwkKq5k8ZGqyH.jpg?r=a7a",
    ],
    [
        "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQUAF5fj_duCKi_acqdLhQ9Ujj1DYnc8SNw-WyNPyKTFKuHgcUVVxHJi8Qtrp9_DD15P2dDLVo1D2VRk5pf2uIAvxB07mR4CDzhSweoePDqRTgZRm9LtQXH7eebR.jpg?r=0ff",
],
    [
        "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABecOF81mGe7s2iOe6jxUWKRraWccfiAFjFyQPpwfCHPK4OxcEhKFfw4JSRcdHB-Oimt-6ybE7SvaHK-kw9Mn8mGeCW4.jpg?r=894",
],
    [
        "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY1SO9JhQQ12Hmoj-RAfWRe3iQv4VX-EO3eBh0HQW_Nn3Sv1QVL-cQY0TS6cowvka1JaF0nCSrpC-aPOalpQsew-uzY.jpg?r=24f",
],
[
        "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfgZH6Dll2MuesDP_bRtAcjIm8SI7CiEFrrGwWad9_PRD8J289GU1t47_6FJ8Nh8dZ0zFWbiDL6J8lzK5Hk64aqE7a_vnoGwGxXiyjE5DdiH0ukwc6SWc10fsOL0.jpg?r=2ee",
],
[
        "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcEHiMWTmG96qUHhTxtTEmJFXhOZj5TjY6ABP_59asQTjfAvKiHesKlToNREDr1T179TWBTNJ8N5rPpATymTX7qsTgE.jpg?r=83b",
],
[
"https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABca0J4Fhg2NyOsF9K4a8LWTdE3Z7P0Jh0fh2JYLOODuz82Z21ZJ_oU-f-_Gep5f8mF895paeiQrKtH-0mvoH44JmrcQ.jpg?r=db4",
],
[
"https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTW9z3JNpCl0xVTfx3oSKkp7GMlwxrf7f0OteeU3cinoPEnr5iVvNN3ONHG7ncSbTFqSsQZEOmrsFFw4JJiSj8pYFUc.jpg?r=bea",
],
[
"https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWwjB0gPhss9coE4tlz6za8g9KuYfE3DDUBBTwxVyw00EBroYZsrBb9dkBsrYvjkcXyHbWrRZPKFCmxwSaYr_mISnvYQtxmD0UUF_HswsD5vNLyCY8CZ2MviecHv.jpg?r=400",
],
];
var i=0;
setInterval(function(){
    document.getElementById('slideshow').innerHTML=null;
    if(i==data.length)
    {
        i=0;
    }
    var img=document.createElement('img');
    img.setAttribute('src',data[i])
    var div=document.getElementById("slideshow")
    div.append(img)
    i++;
   
},3000)
let sev;
var n;
function debounce(){
  document.querySelector('input').style.width="300px"
  
  clearTimeout(sev)
sev=setTimeout(function(){
    displayMoivies()
},1000)
}
function displayMoivies(){
  var name =document.getElementById('name').value;  
  let url=`http://www.omdbapi.com/?i=tt3896198&apikey=a869c26e&s=${name}`;
  fetch(url).then(function(res){
      res.json().then(function(res){ 
          var data=res.Search;
          if(data==undefined)
          {
              return false;
          }
           showMovies(data)
          console.log(data)
      })
  })
}
function showMovies(data)
{
 document.getElementById('show').innerHTML=null
  data.map(function(item){
      var section=document.querySelector('section');

      var te=document.createElement('p')
      te.textContent=item.Title;

      var show=document.getElementById('show')
      show.id="show"
  
      var outerdiv=document.createElement('div')
      outerdiv.addEventListener('click',function(){
          n=item.Title;
          showbutton()
      })
      var imgdiv=document.createElement('div')
      var titlediv=document.createElement('div')
      var img=document.createElement('img');
      img.src=item.Poster;
      var name=document.createElement('p');
      name.textContent=item.Title
      var year=document.createElement('p');
      year.textContent=item.Year;
      imgdiv.append(img)
      titlediv.append(name,year)
      outerdiv.append(imgdiv,titlediv)
      show.append(outerdiv);
    
  })
}

function Search(){
n=document.getElementById('name').value;
showbutton()
}

function showbutton(){ 
let url=`http://www.omdbapi.com/?i=tt3896198&apikey=a869c26e&t=${n}`;
fetch(url).then(function(res){
    res.json().then(function(res){
        var data=res;
        Displayitem(data)
        console.log(data)
        if(data.Response=="False"){
            alert("Movie is not Available ")
        }
    })
})
}

function Displayitem(data)
{
document.getElementById('img').innerHTML=null;
document.getElementById('t').innerHTML=null;
document.getElementById('y').innerHTML=null;
document.getElementById('d').innerHTML=null;
document.getElementById('l').innerHTML=null;
document.getElementById('r').innerHTML=null;
document.getElementById('b').innerHTML=null;
document.getElementById('a').innerHTML=null;
var divimg=document.getElementById('img')
var t=document.getElementById('t')
var y=document.getElementById('y')
var d=document.getElementById('d')
var l=document.getElementById('l')
var r=document.getElementById('r')
var b=document.getElementById('b')
var a=document.getElementById('a')
      var img= document.createElement('img');
    img.src=data.Poster;
    var title=document.createElement('p')
    title.innerHTML=`<span>Title:</span>${data.Title}`;
    var year=document.createElement('p')
    year.innerHTML=`<span>Released:</span>${data.Released}`;
    var dur=document.createElement('p')
    dur.innerHTML=`<span>Duration:</span>${data.Runtime}`;
    var box=document.createElement('p')
    box.innerHTML=`<span>BoxOffice:</span>${data.BoxOffice}`;
    var lan=document.createElement('p')
    lan.innerHTML=`<span>Language:</span>${data.Language}`;
    var rating=document.createElement('p')
    rating.innerHTML=`<span>IMDB-Rating:</span>${data.imdbRating}`;
    var actor=document.createElement('p');
    actor.innerHTML=`<span>Actors:</span>${data.Actors}`;
    if(data.imdbRating>8.5)
    {
        rating.innerHTML=`<span>IMDB-Rating:</span>${data.imdbRating}<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`; 
        title.innerHTML=`<span>Title:</span>${data.Title}<span id=watch>Watch Now</span`;
    }
     divimg.append(img)
    t.append(title);
    y.append(year);
    d.append(dur);
    l.append(lan);
    r.append(rating);
    b.append(box);
    a.append(actor) 
}
Treanding()
function Treanding(){
let url="https://api.themoviedb.org/3/trending/all/day?api_key=d2ebbc273d50bbef871ac3b373ce25bc";
fetch(url).then(function(res){
    res.json().then(function(res){
        let result=res.results;
        displaymovie(result)
    })
})
}
function displaymovie(data){

data.map(function(item){
    var div=document.createElement('div');
    var img=document.createElement('img')
    img.src=`https://image.tmdb.org/t/p/w500${item.poster_path}`;
    let name=document.createElement('p');
    name.textContent=item.title;
    let date=document.createElement('p');
    date.textContent=item.realese_date;
    let rating=document.createElement('p')
    rating.textContent=item.vote_average;
    div.append(img,name,date,rating)
    var tre=document.getElementById("trad")
    tre.append(div)
})
}