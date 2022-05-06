import { Button, ButtonProps } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IProps extends ButtonProps {
  disable?: boolean;
  className?: string;
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function BTN({
  disable,
  className,
  name,
  onClick,
  type,
  ...props
}: IProps) {
  return (
    <Button
      {...props}
      disabled={disable}
      onClick={onClick && onClick}
      type={type && type}
      _focus={{
        outline: "none",
      }}
      className={className}
    >
      {name}
    </Button>
  );
}
