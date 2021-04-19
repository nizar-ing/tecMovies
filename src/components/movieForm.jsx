import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { toLower } from "lodash";
class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {},
    genres: [],
  };
  schema = {
    title: Joi.string().required().label("Username"),
    genre: Joi.string().required().label("Password"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number inStock"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  };
  componentDidMount() {
    this.setState({ genres: getGenres() });
  }
  render() {
    const { match, history } = this.props;
    const { genres } = this.state;
    return (
      <div>
        <h1>Movie Form</h1>
        {this.renderInput(true, "title", "Title")}
        <div className='input-group mb-3'>
          <select className='custom-select' id='inputGroupSelect02'>
            {genres.map((item) => (
              <option key={item._id} value={toLower(item.name)}>
                {item.name}
              </option>
            ))}
          </select>
          <div className='input-group-append'>
            <label className='input-group-text' htmlFor='inputGroupSelect02'>
              Movie Genres
            </label>
          </div>
        </div>
        {this.renderInput(false, "numberInStock", "Number in Stock")}
        {this.renderInput(false, "rate", "Rate")}
        <div className='text-center'>
          <button
            className='btn btn-warning'
            onClick={() => history.push("/movies")}
            style={{ fontWeight: "bold", padding: "5px 30px" }}
          >
            save <i className='fa fa-database'></i>
          </button>
        </div>
      </div>
    );
  }
}

export default MovieForm;
