import React from 'react';
import {Send} from '@material-ui/icons';
import any from '@travi/any';
import {PrimaryButton} from '../..';

export default {
  title: 'Atoms/Buttons/Primary'
};

export function Default() {
  return <PrimaryButton>{any.word()}</PrimaryButton>;
}

Default.story = {
  name: 'default'
};

export function WithIcon() {
  return <PrimaryButton icon={<Send />}>{any.word()}</PrimaryButton>;
}

WithIcon.story = {
  name: 'with icon'
};
