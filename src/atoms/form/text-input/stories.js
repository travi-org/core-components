import React from 'react';
import any from '@travi/any';
import {TextInput} from '../../..';

export default {
  title: 'Atoms/Form/Text-Input'
};

export function Default() {
  return <TextInput id={any.word()} label={any.word()} />;
}

Default.story = {
  name: 'default'
};

export function FullWidth() {
  return (
    <div css={{maxWidth: 500}}>
      <TextInput id={any.word()} label={any.word()} variant="full-width" />
    </div>
  );
}

FullWidth.story = {
  name: 'full-width'
};
