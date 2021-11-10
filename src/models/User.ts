interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get = (propName: string): number | string => this.data[propName];

  set = (update: UserProps): void => {
    Object.assign(this.data, update);
  };

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };

  fetch = () => {};

  save = () => {};
}

export { User };
