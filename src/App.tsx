import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  //when to show alert state varialbe
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {/* use message componenet */}
      <Message></Message>
      {/* use list group component */}
      <ListGroup
        items={["kathmandu", "pokhara", "chitwan", "dharan", "jhapa"]}
        heading="List of cities"
        onSelectItem={(item:string)=>console.log("the selected item is"+item)}
      ></ListGroup>
      {/* use alert component, here passing children Hi dawa which will be accessed through props but 
      if passing the element set props to children and type ReactNode */}
      {/* after using and operator if alertVisible is true then Alert componenet will be viewed else none */}
      {alertVisible && (
        <Alert onDismiss={() => setAlertVisible(false)}>Hi dawa</Alert>
      )}
      {/* using button components */}
      <Buttons
        color="primary"
        onTap={() => {
          console.log("clicked");
          setAlertVisible(true);
        }}
      >
        Click Me
      </Buttons>
    </div>
  );
}

//to make it usable
export default App;
