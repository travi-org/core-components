/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {Logo} from '../..';

storiesOf('Atoms/Logo', module).add('default', () => <Logo />);
