import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import SearchBox from "./searchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: null,
    pageSize: 4,
    searchQuery: "",
    currentPage: 1,
    sortColumn: { field: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];
    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    try {
      await deleteMovie(movie._id);
    } catch (e) {
      if (e.response && e.response.status === 404) {
        toast.error("This movie has already been deleted.");
      }
      this.setState({ movies: originalMovies });
    }
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
    this.setState({ selectedGenre: item, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      searchQuery,
      movies,
      sortColumn,
    } = this.state;
    let filteredMovies = movies;
    if (searchQuery) {
      filteredMovies = movies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filteredMovies = movies.filter(
        (item) => item.genre._id === selectedGenre._id
      );
    }
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
      searchQuery,
      genres,
      sortColumn,
    } = this.state;
    const { user } = this.props;
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
          {user && (
            <Link className='btn btn-success mb-3' to='/movies/new'>
              New Movie <i className='fa fa-plus ml-2'></i>
              <i className='fa fa-film ml-1'></i>
            </Link>
          )}
          <p>
            <strong>
              showing
              <span className='badge badge-pill badge-warning m-1'>
                {totalCount}
              </span>
              movies in the database
            </strong>
          </p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
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
