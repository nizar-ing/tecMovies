import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
const Table = (props) => {
  const { data, columns, sortColumn, onSort } = props;
  return (
    <table
      className='table table-dark table-hover'
      style={{ borderRadius: "5px 5px 0 0" }}
    >
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={props.columns} />
    </table>
  );
};

export default Table;
