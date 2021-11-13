import { User, UserProps } from '../models/User';
import { View } from './View';

class UserForm extends View<User, UserProps> {
  eventsMap = (): { [key: string]: () => void } => ({
    'click:#set-age': this.onSetAgeClick,
    'click:#set-name': this.onSetNameClick
  });

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
  onSetAgeClick = this.model.setRandomAge;

  template = (): string => `
    <div>
      <h1>UserForm</h1>
      <div>User name: ${this.model.get('name')}</div>
      <div>User age: ${this.model.get('age')}</div>
      <input />
      <button id="set-name">Change Name</button>
      <button id="set-age">Set Random Age </button>
    </div>
  `;
}

export { UserForm };
