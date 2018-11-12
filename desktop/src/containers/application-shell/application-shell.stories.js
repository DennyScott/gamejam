import React from 'react';
import { storiesOf } from '@storybook/react';
import ApplicationShell from './components/application-shell';

const story = storiesOf('Application Shell', module);

story.add('default', () => (<ApplicationShell><div></div></ApplicationShell>));