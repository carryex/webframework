import { User } from "./models/User";

console.log('Hi there');

const user = new User({});
console.log(`User name: ${user.get('name')} and age: ${user.get('age')}`)

user.set({name: "Dan"});
console.log(`User name: ${user.get('name')} and age: ${user.get('age')}`)
