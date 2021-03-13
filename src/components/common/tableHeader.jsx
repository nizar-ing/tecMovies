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
  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.field) return null;
    if (sortColumn.order === "asc") return <i className='fa fa-sort-asc'></i>;
    if (sortColumn.order === "desc") return <i className='fa fa-sort-desc'></i>;
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
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
