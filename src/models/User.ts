import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collections';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const rootUrl = 'http://localhost:3000/users';

class User extends Model<UserProps> {
  static buildUser = (attrs: UserProps): User => {
    return new User(
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(rootUrl),
      new Eventing()
    );
  };

  static buildUserCollection = (): Collection<User, UserProps> =>
    new Collection<User, UserProps>(rootUrl, User.buildUser);

  isAdminUser = (): boolean => this.get('id') === 1;
  setRandomAge = (): void => this.set({ age: Math.round(Math.random() * 50) });
}

export { User, UserProps };
