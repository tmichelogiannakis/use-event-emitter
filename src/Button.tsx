import { FC, MouseEvent } from "react";
import useEventEmitter from "./useEventEmitter";

const Button: FC<{ moveCounter: number }> = ({ moveCounter, children }) => {
  const { dispatch } = useEventEmitter();

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    dispatch<number>("COUNTER", moveCounter);
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
