import { storiesOf } from '@storybook/angular';
import { AppComponent } from '../app/app.component';

storiesOf('My App', module)
  .add('simple app component', () => ({
    component: AppComponent,
    props: {},
  }));

