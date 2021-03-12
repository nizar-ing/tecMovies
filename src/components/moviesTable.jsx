import React from "react";
import Like from "./common/like";
const MoviesTable = (props) => {
  const { movies, onDelete, onLike } = props;
  return (
    <table
      className='table table-dark table-hover'
      style={{ borderRadius: "5px 5px 0 0" }}
    >
      <thead className='bg-warning' style={{ color: "#333" }}>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
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
};

export default MoviesTable;
