import { UserList } from './views/UserList';
import { Collection } from './models/Collections';
import { User, UserProps } from './models/User';

const users = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
);
const root = document.getElementById('root');
users.on('change', () => {
  if (root) new UserList(root, users).render();
});
users.fetch();
