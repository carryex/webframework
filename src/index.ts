import { User } from './models/User';

const user = new User({});

user.sync.save({ name: 'Daniil', age: 30 });
