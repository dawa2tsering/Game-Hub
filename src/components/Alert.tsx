import { ReactNode } from "react";

//in this case if we use key word children we will be able to access children of element
//eg <h1>hi dawa</h1> here we will be able to get childern hi dawa of h1 element,
// the type can be set to string but if we were to pass another jsx element then we need type ReactNode class
interface AlertProps {
  children: ReactNode;
  onDismiss: () => void;
}

//
//
//////////////////////////////////////
//this component was created by rafc key reactarrowfunction which default creates component
const Alert = ({ children, onDismiss }: AlertProps) => {
  //borrowed alert template from https://getbootstrap.com/docs/5.3/components/alerts/
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onDismiss}
      ></button>
    </div>
  );
};

export default Alert;
