import React from 'react';
import {bool, string} from 'prop-types';
import {TextField} from '@material-ui/core';

export default function Input({id, label, type, multiline, variant}) {
  return (
    <TextField
      id={id}
      name={id}
      label={label}
      type={type}
      multiline={multiline}
      css={{...'full-width' === variant && {width: '100%'}}}
    />
  );
}

Input.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  type: string,
  multiline: bool,
  variant: string
};

Input.defaultProps = {
  type: 'text'
};
