import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './menu';

const story = storiesOf("Menu", module);

story.add('default', () => (<Menu />));