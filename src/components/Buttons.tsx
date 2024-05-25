interface ButtonsProps {
  children: string;
  color?: "primary" | "secondary" | "success";  //using or to set that the color will have only one of 3 value
  onTap: () => void;
}
//color value is set to option so it may not have value
//
//
//////////////////////////
function Buttons({ children, color = "primary", onTap }: ButtonsProps) {  //intializing primaring value so the button can have color during render
  //borrowed button template from https://getbootstrap.com/docs/5.3/components/buttons/

  return (
    <button type="button" className={"btn btn-" + color} onClick={onTap}>
      {children}
    </button>
  );
}

//to make the component usable
export default Buttons;
