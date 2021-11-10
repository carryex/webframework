interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => {};

class User {
  constructor(private data: UserProps) {}

  get = (propName: string): number | string  => this.data[propName]
  
  set = (update: UserProps):void => {
    Object.assign(this.data, update);
  }

  on = (eventName: string, callback: Callback) => {

  }
}

export {User};