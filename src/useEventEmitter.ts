const _events: { [key: string]: any[] } = {};

const useEventEmitter = () => {
  const dispatch = <T>(event: string, data: T) => {
    if (!_events[event]) {
      return;
    }
    _events[event].forEach((callback: (data: T) => void) => {
      callback(data);
    });
  };

  const subscribe = <T>(event: string, callback: (data: T) => void) => {
    if (!_events[event]) {
      _events[event] = [];
    }
    _events[event].push(callback);
  };

  const unsubscribe = (event: string) => {
    if (!_events[event]) {
      return;
    }
    delete _events[event];
  };

  return { dispatch, subscribe, unsubscribe };
};

export default useEventEmitter;
