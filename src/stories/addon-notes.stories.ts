import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { ButtonComponent } from '../app/button.component';

storiesOf('Addon|Notes', module)
  .addDecorator(withNotes)
  .add(
    'Simple note',
    () => ({
      component: ButtonComponent,
      props: {
        text: 'Notes on some Button',
        onClick: () => {},
      },
    }),
    { notes: 'My notes on some button' }
  )
  .add(
    'Note with HTML',
    () => ({
      component: ButtonComponent,
      props: {
        text: 'Notes with HTML',
        onClick: () => {},
      },
    }),
    {
      notes: `
      <h2>My notes on emojis</h2>

      <em>It's not all that important to be honest, but..</em>

      Emojis are great, I love emojis, in fact I like using them in my Component notes too! 😇
    `,
    }
  );
