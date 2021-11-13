import { User, UserProps } from '../models/User';
import { View } from './View';

class UserForm extends View<User, UserProps> {
  eventsMap = (): { [key: string]: () => void } => ({
    'click:#set-age': this.onSetAgeClick,
    'click:#set-name': this.onSetNameClick,
    'click:#save-model': this.onSaveClick
  });

  onSaveClick = this.model.save;
  onSetAgeClick = this.model.setRandomAge;

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template = (): string => `
    <div>
      <input placeholder="${this.model.get('name')}"/>
      <button id="set-name">Change Name</button>
      <button id="set-age">Set Random Age</button>
      <button id="save-model">Save User</button>
    </div>
  `;
}

export { UserForm };
