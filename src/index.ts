import { User } from './models/User';
import { UserForm } from './views/UserForm';

const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(
    root,
    User.buildUser({ id: 1, name: 'Daniil', age: 30 })
  );
  userForm.render();
} else {
  throw new Error('Root element not found');
}
