import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/button.component';

storiesOf('Addon|Actions', module)
  .add('Action only', () => ({
    component: ButtonComponent,
    props: {
      text: 'Action only',
      onClick: action('log 1')
    }
  }))
  .add('Action and method', () => ({
    component: ButtonComponent,
    props: {
      text: 'Action and Method',
      onClick: e => {
        console.log(e);
        e.preventDefault();
        action('log2')(e.target);
      }
    }
  }));
