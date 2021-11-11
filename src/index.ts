import { User } from './models/User';

const user = new User({ id: 1, name: 'Buba', age: 999 });

user.on('save', () => {
  console.log(user);
});

user.save();
