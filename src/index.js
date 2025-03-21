document.addEventListener('DOMContentLoaded', () => {
    console.log('here we go')
    getMovies()
});

let allMovies = [];

function getMovies(){
const movieList = document.getElementById('movie-list');
movieList.innerHTML = ""; 
fetch('http://localhost:3000/movies')
.then(res => res.json())
.then(data =>{
    data.forEach(movie => {
        movieList.innerHTML += `
            
          <ul>  <h3>${movie.title} (${movie.year})</h3>
            <p>Genre: ${movie.genre}</p>
            <img src="${movie.poster}" width="100">
            <button class="add-watchlist-btn" data-id="${movie.id}">Add to Watchlist</button>
            </ul>
        `
        console.log(movie);
    })
});
 movieList.addEventListener('click',(e)=>{
    if (e.target.classList.contains('add-watchlist-btn')){
        const movieId = e.target.dataset.id;
        console.log('clicked movie:', movieId)
    }
  })

 }

//const ShowMovies = (){
    //const movieList = document.getElementById('movie-list')
    //movieList.forEach(moviez)



