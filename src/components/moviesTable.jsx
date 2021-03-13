import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "title" },
    { path: "genre.name", label: "genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];
  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
    return (
      <table
        className='table table-dark table-hover'
        style={{ borderRadius: "5px 5px 0 0" }}
      >
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
