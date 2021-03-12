import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  raiseSort = (propertyField) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.field === propertyField) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.field = propertyField;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onDelete, onLike } = this.props;
    return (
      <table
        className='table table-dark table-hover'
        style={{ borderRadius: "5px 5px 0 0" }}
      >
        <thead className='bg-warning' style={{ color: "#333" }}>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  className='btn btn-danger btn-sm float-right badge-pill'
                  onClick={() => onDelete(movie)}
                >
                  delete <i className='fa fa-trash'></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
