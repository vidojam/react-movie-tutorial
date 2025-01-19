
function MovieCard({movie}) {

    function onFavoriteClick() {
        alert('Favorite clicked');
    }

        return (
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={movie.url} alt={movie.title} />
                    <div className="movie-overlay">
                        <button type="button" className="favorite-btn" onClick={onFavoriteClick} title="Add to favorites">
                            <i className="fa fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </div>
            </div>
        );
    }

    export default MovieCard;