/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {Logo} from '../..';

export default {
  title: 'Atoms/Logo'
};

export function Default() {
  return <Logo />;
}

Default.story = {
  name: 'default'
};
