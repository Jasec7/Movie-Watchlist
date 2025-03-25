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
    renderMovies(allMovies)
        console.log(allMovies);
    })

    const search = document.getElementById('search-input')
    search.addEventListener('input', (e) =>{
    const searchTerm = e.target.value.toLowerCase();

    const filteredMovies = allMovies.filter(movie => 
     movie.title.toLowerCase().includes(searchTerm));
     renderMovies(filteredMovies);
  });

};
const renderMovies = (movieArray) =>{
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = "";
    movieArray.forEach(movie =>{
        movieList.innerHTML +=`
        <div>
        <h3>${movie.title} (${movie.year})</h3>
        <p>Genre: ${movie.genre}</p>
        <img src="${movie.poster}" width="100">
        <button class="add-watchlist-btn" data-id="${movie.id}">Add to Watchlist</button>
      </div>
        `
 })

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
                <h4>${selectedMovie.title}</h4>
                <img src="${selectedMovie.poster}" width="100">
                <button class="remove-watchlist-btn">Remove</button>
                </ul>
                `
                   console.log(selectedMovie.title);
    
        document.getElementById('watchlist').appendChild(block)
        };
    
        }); 
        
        document.getElementById('watchlist').addEventListener('click', (e) => {
            if(e.target.classList.contains('remove-watchlist-btn')) {
               e.target.closest('div').remove(); 
            } 
    
    })
}







