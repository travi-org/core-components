import React from 'react';
import {Send} from '@material-ui/icons';
import any from '@travi/any';
import {PrimaryButton} from '../..';

export default {
  title: 'Atoms/Buttons/Primary'
};

export const Default = () => <PrimaryButton>{any.word()}</PrimaryButton>;

Default.story = {
  name: 'default'
};

export const WithIcon = () => <PrimaryButton icon={<Send />}>{any.word()}</PrimaryButton>;

WithIcon.story = {
  name: 'with icon'
};
