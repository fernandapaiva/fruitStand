import React from 'react';
import {Container} from './styles';

const CheckBox = ({checked, onPress}) => {
  return <Container checked={checked} onPress={onPress}/>;
}

export default CheckBox;