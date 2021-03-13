import React, { Component } from "react";
// our TableHeader interface should have:
// - columns or fields of our table which is an array.
// - sortColumn: which is a literal object.
// - onSort: which is a function.
class TableHeader extends Component {
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
    return (
      <thead className='bg-warning' style={{ color: "#333" }}>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              style={{ cursor: "pointer" }}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
