import { useEffect, useState } from "react";
import useEventEmitter from "./useEventEmitter";
import Button from "./Button";

function App() {
  const [counter, setCounter] = useState(0);
  const { subscribe, unsubscribe } = useEventEmitter();

  useEffect(() => {
    subscribe<number>("COUNTER", (data) => {
      setCounter((x) => x + data);
    });

    return () => {
      unsubscribe("COUNTER");
    };
  }, [subscribe, unsubscribe]);

  return (
    <div className="text-center">
      <Button moveCounter={-1}>-</Button>
      {counter}
      <Button moveCounter={1}>+</Button>
    </div>
  );
}

export default App;
