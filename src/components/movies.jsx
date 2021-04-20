import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: null,
    pageSize: 4,
    currentPage: 1,
    sortColumn: { field: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (item) => {
    this.setState({ selectedGenre: item, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies,
      sortColumn,
    } = this.state;
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? movies.filter((item) => item.genre._id === selectedGenre._id)
        : movies;
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.field],
      [sortColumn.order]
    );
    const pageMovies = paginate(sortedMovies, currentPage, pageSize);
    return { totalCount: filteredMovies.length, data: pageMovies };
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      genres,
      sortColumn,
    } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;
    const { totalCount, data: moviesPage } = this.getPagedData();
    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className='col'>
          <Link className='btn btn-success mb-3' to='/movies/new'>
            New Movie <i className='fa fa-plus ml-2'></i>
            <i className='fa fa-film ml-1'></i>
          </Link>
          <p>
            <strong>
              showing
              <span className='badge badge-pill badge-warning m-1'>
                {totalCount}
              </span>
              movies in the database
            </strong>
          </p>
          <MoviesTable
            movies={moviesPage}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
