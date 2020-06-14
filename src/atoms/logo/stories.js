/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {Logo} from '../..';

export default {
  title: 'Atoms/Logo'
};

export const Default = () => <Logo />;

Default.story = {
  name: 'default'
};
