import React from 'react';
import { Text } from 'react-native';

export default props => (
  <Text
    {...props}
    style={
      [
        { color: props.color || 'black', fontSize: props.size || 14 },
        props.style,
        props.center && { textAlign: 'center' },
        props.bold && { fontWeight: 'bold' },
        props.grey && { color: '#9F9F9F' },
      ]
    }
  />
)