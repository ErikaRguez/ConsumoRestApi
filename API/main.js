fetch('https://api.sampleapis.com/movies/horror')
.then(response => response.json())
.then(data => {
    const moviesContainer = document.querySelector('.movies-container');
    const originalMovies = data; 
    data.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.posterURL}" alt="${movie.title}">
        <p>IMDB ID: ${movie.imdbId}</p>
        `;
        moviesContainer.appendChild(movieElement);
    });
    moviesContainer.dataset.movies = JSON.stringify(originalMovies);
})
.catch(error => {
    console.error('Error:', error);
});
function searchMovies() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const moviesContainer = document.querySelector('.movies-container');
    const originalMovies = JSON.parse(moviesContainer.dataset.movies);
    const filteredMovies = originalMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm)
    );
    renderMovies(filteredMovies);
}
function showAllMovies() {
    const moviesContainer = document.querySelector('.movies-container');
    const originalMovies = JSON.parse(moviesContainer.dataset.movies);

    renderMovies(originalMovies);
}
function renderMovies(movies) {
    const moviesContainer = document.querySelector('.movies-container');
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.posterURL}" alt="${movie.title}">
        <p>IMDB ID: ${movie.imdbId}</p>
        `;
        moviesContainer.appendChild(movieElement);
    });
}
