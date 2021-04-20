import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number inStock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
  };
  componentDidMount() {
    const genres = getGenres();
    const { match, history } = this.props;
    this.setState({ genres });
    const movieId = match.params.id;
    if (movieId === "new") return;
    const movie = getMovie(movieId);
    if (!movie) history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(movie) });
  }
  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre["_id"],
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };
  doSubmit = () => {
    const { data } = this.state;
    const { history } = this.props;
    saveMovie(data);
    history.push("/movies");
  };
  render() {
    const { history } = this.props;
    const { genres } = this.state;
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput(true, "title", "Title")}
          {this.renderSelect("genreId", "Genre", genres)}
          {this.renderInput(false, "numberInStock", "Number in Stock")}
          {this.renderInput(false, "dailyRentalRate", "Rate")}
          <div className='text-center'>
            {console.log(this.validate())}
            <button
              className='btn btn-warning'
              disabled={this.validate()}
              onClick={() => history.push("/movies")}
              style={{ fontWeight: "bold", padding: "5px 30px" }}
            >
              save <i className='fa fa-database'></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MovieForm;
