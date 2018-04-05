import { storiesOf } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { AppComponent } from '../app/app.component';

storiesOf('My App', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [AppComponent]
    })
  )
  .add('simple app component', () => ({
    template: `
      <app-root
        [title]="title"
        (action)="onAction($event)">
      </app-root>
    `,
    props: {
      title: text('title', 'Hello World'),
      onAction: action('Action happened')
    }
  }));
