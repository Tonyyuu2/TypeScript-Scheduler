import React from "react";
import "./Button.css";

import classNames from "classnames";

interface Props {
  children: string;
  confirm: string;
  danger: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ children, confirm, danger, onClick, disabled }: Props) => {
  let buttonClass: string = classNames("button", {
    "button--confirm": confirm,
    "button--danger": danger,
  });


  return <button className={buttonClass} onClick={onClick}>{children}</button>;
};

export default Button;
