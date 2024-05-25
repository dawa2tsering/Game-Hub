import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//
//
////////////////////////////////////////////////////////
//pascal casing
// function ListGroup(props:ListGroupProps) this is also a way but it
//repeates the code if we use it we need to write props.item or props.heading every we use
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //if index is -1 then no item will be selected
  //useState is a React Hook that lets you add a state variable to your component
  const [selectedIndex, setSelectedIndex] = useState(-1); //state variable

  //message for empty items
  const message = <p>No cities found.</p>;

  //event handler click
  function listClickHandler(index: number) {
    setSelectedIndex(index);
  }

  //borrowed listgroup template from https://getbootstrap.com/docs/5.3/components/list-group/
  //using fragment (<> </>) to render group of element
  //to use code within jsx use curly braces {} to execute
  //in jsx there is no for loop so we have to use .map method to map
  //use key in jsx element to make the element unique so can handle individual selection, removal, update
  //use of terniary operator in case of empty list
  //jsx element can be stored in a variable to make code clean
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0
          ? message
          : items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={index}
                onClick={() => {
                  listClickHandler(index);
                  onSelectItem(item);
                }}
              >
                {item}
              </li>
            ))}
      </ul>
    </>
  );
}

//to make it usable
export default ListGroup;
