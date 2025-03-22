document.addEventListener('DOMContentLoaded', () => {
    console.log('Movie')
    getMovies()
});

let allMovies = [];

function getMovies(){
const movieList = document.getElementById('movie-list');
movieList.innerHTML = ""; 
fetch('http://localhost:3000/movies')
.then(res => res.json())
.then(data =>{
    allMovies = data;
    data.forEach(movie => {
        movieList.innerHTML += `
            
          <ul>  
            <h4>${movie.title} (${movie.year})</h4>
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
        console.log('clicked movie:', movieId);
        const alreadyAdded = document.getElementById(`watchlist-item-${movieId}`);
        if(alreadyAdded){
            console.log(`Movie ${movieId} already in watchlist.`);
            return;
        }
          
        const selectedMovie = allMovies.find(movie => movie.id == movieId)
        const block = document.createElement('div');
        block.id = `watchlist-item-${movieId}` 
        block.innerHTML = `
         <ul> 
             ${selectedMovie.title}
               <img src="${selectedMovie.poster}" width="100">
               </ul>`;
               
               console.log(selectedMovie.title);

    document.getElementById('watchlist').appendChild(block)
    }
    
  })

}





