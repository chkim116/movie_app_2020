import React from "react";
import Axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovie = async () => {
    const {
      data: {
        data: { movies },
      },
      // 데이터 안에 데이터 안에 movies.
    } = await Axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=like_count"
      // ?sort_by=download_count 를 url뒤에 붙여 놓으면 다운로드 카운트 순서대로 나온다.
    );
    this.setState({ movies: movies, isLoading: false }); // movies:movies는 movies와 같다.
    // 로딩을 완료한 후 we are ready!를 출력
  };

  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoading, movies } = this.state;
    console.log({ isLoading, movies });
    return (
      <section className="section">
        {isLoading ? (
          <div className="loading">
            <div className="loading__text">Please one seconds!</div>
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
