import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const rootUrl = 'http://localhost:3000/users';
class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  private attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}

export { User };
