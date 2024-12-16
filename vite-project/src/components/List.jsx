import React from "react";
function List() {
  let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
  return (
    <React.Fragment>
      <h1>List Of Fruits</h1>
      <ul className="list-group">
        {fruits.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default List;
