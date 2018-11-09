import { configure } from '@storybook/react';

const req = require.context('../src/containers', true, /\.stories\.js$/);
const req2 = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  req2.keys().forEach(filename => req2(filename));
}

configure(loadStories, module);
