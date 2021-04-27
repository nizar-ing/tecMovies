import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "../services/movieService";
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
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };
  async populateGenres(){
    const {data: genres} = await getGenres();
    this.setState({ genres });
  }
  async populateMovie(){
    const { match, history } = this.props;
    const movieId = match.params.id;
    if (movieId === "new") return;
    try{
      const {data: movie} = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (e) {
      if(e.response && e.response.status === 404){
        history.replace("/not-found");
      }
    }
  }
  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }
  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };
  render() {
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
            <button
              className='btn btn-warning'
              disabled={this.validate()}
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
