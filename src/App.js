import React from "react";
import Axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  };
  getMovie = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await Axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({ movies: movies, isLoding: false }); // movies:movies는 movies와 같다.
    // 로딩을 완료한 후 we are ready!를 출력
  };

  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoding, movies } = this.state;
    return (
      <section className="section">
        {isLoding ? (
          <div className="loding">
            <div className="loding__text">Loding..</div>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                rating={movie.rating}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
// this는 상위에 있는 선언한 객체를 불러온다고 생각하면된다. 여기서는 App을 뜻한다.
// 그래서 App.state.count라고 생각하면 된다.
// div안에 있어야 한다. (태그안에)
export default App;
