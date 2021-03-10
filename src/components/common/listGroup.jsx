import React from "react";
const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;

  return (
    <ul className='list-group list-group mt-3' style={{ cursor: "pointer" }}>
      {items.map((item) => (
        <li
          key={item[valueProperty] ? item[valueProperty] : 0}
          className={
            item === selectedItem
              ? "list-group-item active"
              : item.name === "All Genres"
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
          style={
            !selectedItem && !item._id
              ? {
                  color: "black",
                  backgroundColor: "#ffc107",
                  borderColor: "#f7f7f7",
                  fontWeight: "bold",
                }
              : item === selectedItem
              ? {
                  color: "black",
                  backgroundColor: "#ffc107",
                  borderColor: "#f7f7f7",
                  fontWeight: "bold",
                }
              : {
                  color: "white",
                  backgroundColor: "#292b2c",
                  borderColor: "#f7f7f7",
                  fontWeight: "bold",
                }
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
