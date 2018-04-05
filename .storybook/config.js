import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

// https://github.com/storybooks/storybook/tree/master/addons/options#getting-started
setOptions({
  name: 'Demo Storybook',
  url: '#',
});

function loadStories() {
  // load all from  /src/stories/*.stories.ts files
  const req = require.context('../src/stories', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
