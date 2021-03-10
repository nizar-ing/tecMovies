import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pagesArray = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <li className='page-item'>
          <a className='page-link' style={{ backgroundColor: "#fc4445" }}>
            <i className='fa fa-backward' aria-hidden='true'></i>
          </a>
        </li>
        {pagesArray.map((numPage) => (
          <li
            key={numPage}
            className={
              numPage === currentPage ? "page-item active" : "page-item"
            }
          >
            <a
              className='page-link'
              onClick={() => onPageChange(numPage)}
              style={{ backgroundColor: "#fc4445", borderColor: "whitesmoke" }}
            >
              {numPage}
            </a>
          </li>
        ))}
        <li className='page-item'>
          <a className='page-link' style={{ backgroundColor: "#fc4445" }}>
            <i className='fa fa-forward' aria-hidden='true'></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
