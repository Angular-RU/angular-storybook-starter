import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from '../app/button.component';

storiesOf('Addon|Links', module).add(
  'button with link to another story',
  () => ({
    component: ButtonComponent,
    props: {
      text: 'Go to My App Story',
      onClick: linkTo('My App')
    }
  })
);
