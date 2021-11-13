import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

class UserEdit extends View<User, UserProps> {
  regionsMap = (): { [key: string]: string } => ({
    userShow: '.user-show',
    userForm: '.user-form'
  });

  onRender = () => {
    const userShow = new UserShow(this.regions.userShow, this.model);
    const userForm = new UserForm(this.regions.userForm, this.model);

    userShow.render();
    userForm.render();
  };

  template = (): string => `
    <div>
      <div class="user-show"></div>
      <div class="user-form"></div>
    </div>
 `;
}

export { UserEdit };
