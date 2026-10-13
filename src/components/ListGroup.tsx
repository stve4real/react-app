import { useState } from "react";

interface props {
  items: string[];
  heading: string;

  // items:string
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event: MouseEvent is a type annotation that specifies the type of the event parameter in the handleCliclk Function.
  //Hook

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() =>{ 
               setSelectedIndex(index)
               onSelectedItem(item);
             }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
