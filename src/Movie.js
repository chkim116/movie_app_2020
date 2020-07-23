import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, rating, title, summary, poster, genres }) {
  return (
    <div className="movie__desc">
      <div className="movie__img">
        <img src={poster} alt={title} title={title}></img>
        <h3 className="movie__title">{title}</h3>
      </div>
      <div className="movie__desc-det">
        <div className="movie__sub">
          <h5 className="movie__year">Year {year}</h5>
          <h5 className="movie__rating">Rating {rating}</h5>
        </div>
        <ul className="movie__genr">
          {genres.map((genr, index) => (
            <li key={index} className="genr__list">
              {genr}
            </li>
          ))}
          {/* 맵은 복제함과 동시에 배열마다의 index값을 줘서 key는 index를 넣어주면된다 */}
        </ul>
        <p className="movie__sum">{summary.slice(0, 240)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
