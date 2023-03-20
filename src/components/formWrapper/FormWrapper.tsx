import { ReactNode } from "react";
import "./formWrapper.scss";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};
const FormWrapper = ({ title, description, children }: Props) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="children">{children}</div>
    </div>
  );
};

export default FormWrapper;
