import { User } from './models/User';

console.log('Hi there');

const user = new User({ name: 'Daniil', age: 30 });

user.on('chnage', () => {
  console.log('Change #1');
});
user.on('chnage', () => {
  console.log('Change #3');
});
user.on('chnage', () => {
  console.log('Change #2');
});
user.on('save', () => {
  console.log('Save was triggered');
});

user.trigger('asdf');
