import { FC } from "react";
import {
  Button as ButtonComponent,
  ButtonProps as AntdButtonProps,
} from "antd";

import  "./button.scss";

interface ButtonProps extends AntdButtonProps {}

const Button: FC<ButtonProps> = (props) => {
  return (
    <ButtonComponent className="button" {...props}>
      {props.children}
    </ButtonComponent>
  );
};

export default Button;
