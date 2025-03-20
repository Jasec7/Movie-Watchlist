document.addEventListener('DOMContentLoaded', () => {
    console.log('here we go')
    getMovies()
});

function getMovies(){
    const ul = document.getElementById('movie-list');
    ul.innerHTML = ""; 
    fetch('http://localhost:3000/movies')
  .then(res => res.json())
  .then(data =>{
    data.forEach(movie => {
        ul.innerHTML += `
            
                <h3>${movie.title} (${movie.year})</h3>
                <p>Genre: ${movie.genre}</p>
                <img src="${movie.poster}" width="100">
            
        `;

 console.log(movie)
    })
})
}

//const ShowMovies = (){
    //const movieList = document.getElementById('movie-list')
    //movieList.forEach(moviez)



